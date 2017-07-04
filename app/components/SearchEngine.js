import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Action from '../../utils/wrappers/redux/Action';
import actionTypes from '../../utils/definitions/action_types/SearchEngineActionTypes';

import OverlayController from '../../utils/OverlayController';
import Overlay from './containers/Overlay';

/*
 * Sanity Checklist:
 *   - ensure Overlay is appeared when input is focused.
 *   - ensure that by clicking a wrapper div of input should make input be focused
 *   - ensure that when search result shows up when two or more characters are present on input
 *   - ensure characters present on input is reasonably similar as results being displayed
 *   - ensure that no more than 5 results are shown given characters on input
 *   - ensure that by clicking the overlay, overlay disappears, input is blurred, and result are hidden
 *   - ensure that by pressing esc (either focusing on input or result) should have same behavior as above
 *   - ensure that by pressing up and down arrow, user can navigate between input and results
 *   - TODO: ensure that clicking or pressing enter on selected item in result, displays chip on input
 *   - TODO: ensure first item in result is focused by default upon change characters on input
 */

export class SearchEngine extends React.Component {
  constructor({ placeholder, endpoint, className }) {
    super();

    this.onClick = this.onClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.searchByName = this.searchByName.bind(this);

    this.attributes = {
      root: {
        className: `search-engine ${className || ''}`.trim(),
        onKeyUp: this.onKeyUp,
      },
      input: {
        type: 'text',
        placeholder: placeholder || 'Search something',
        onFocus: this.onFocus,
      },
    };
    this.state = { isBlurred: true };
    this.endpoint = endpoint || '';
  }

  onClick(event) {
    event.preventDefault();
    this.inputField.focus();
  }

  onFocus(event) {
    event.preventDefault();
    OverlayController.show(this.overlay.element);
    this.setState(prev => ({ isBlurred: false }));
  }

  onOverlayClick(event) {
    event.preventDefault();
    this.setState(prev => ({ isBlurred: true }));
  }

  onKeyUp(event) {
    event.preventDefault();

    const { activeElement } = document;
    const tabIndex = parseInt(activeElement.tabIndex);

    const results = [this.inputField, ...this.result.childNodes];
    const size = results.length;

    const keyCode = event.keyCode || event.which;

    switch (keyCode) {
      case 27: { // ESC
        this.inputField.blur();
        if (activeElement && results.indexOf(activeElement) !== -1) {
          results[tabIndex].blur();
        }
        OverlayController.hide(this.overlay.element);
        this.setState(prev => ({ isBlurred: true }));
        break;
      }
      case 38: { // Up Arrow
        if (activeElement && results.indexOf(activeElement) !== -1) {
          results[tabIndex].blur();
        }
        results[(size + (tabIndex - 1)) % size].focus();
        break;
      }
      case 40: { // Down Arrow
        if (activeElement && results.indexOf(activeElement) !== -1) {
          results[tabIndex].blur();
        }
        results[(tabIndex + 1) % size].focus();
        break;
      }
      default: {
        this.searchByName(this.inputField.value.toLowerCase().trim());
      }
    }
  }

  searchByName(keyword='') {
    const { SEARCH_BY_NAME } = actionTypes;
    this.props.dispatch(new Action(SEARCH_BY_NAME, { keyword, endpoint: this.endpoint }));
  }

  // TODO: svg may not work in certain browsers. think of alternatives
  render() {
    return (
    <div {...this.attributes.root}>
      <Overlay ref={(element) => { this.overlay = element; }} onClick={this.onOverlayClick}/>
      <div className='search-engine-input overlay-content' onClick={this.onClick}>
        <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <circle fill='none' strokeWidth='1.1' cx='9' cy='9' r='7'> </circle>
          <path fill='none' strokeWidth='1.1' d='M14,14 L18,18 L14,14 Z'> </path>
        </svg>
        <input ref={(element) => { this.inputField = element; }} {...this.attributes.input} />
      </div>
      <ul className='search-result overlay-content' ref={(element) => { this.result = element; }}>
        {!this.state.isBlurred && this.props.result.map((item, i) => (
          <li tabIndex={i+1}>
            <img src={item.logo} alt={`The image of ${item.name}`} />
            <span className='search-result-name'>{item.name}</span>
            <span className='search-result-metadata'>{item.location.text}</span>
          </li>
        ))}
      </ul>
    </div>
    );
  }
}

SearchEngine.propTypes = {
  result: PropTypes.array,
  dispatch: PropTypes.func,
  placeholder: PropTypes.string,
  endpoint: PropTypes.string,
  className: PropTypes.string,
};

const mapStateToProps = store => ({ result: store.SearchEngineReducer });

export default connect(mapStateToProps)(SearchEngine);
