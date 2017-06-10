import React from 'react';
import PropTypes from 'prop-types';

import TypeChecker from '../../utils/TypeChecker';

const { isString, isInteger } = TypeChecker;

/*
 * Sanity Checklist:
 *   - default case --> removable=false, size=default font-size
 *   - Chip should not be highlight-able
 *   - Chip has 'x' mark svg when it has 'removable' in attribute or 'removable' is set to true
 *   - when a Chip has 'x' mark, the cursor on that mark should be a pointer
 *   - when a Chip has 'x' mark and a user clicks that mark, that Chip should disappear
 *   - Chip does not render when children markup is undefined or is not text
 *   - Chip has size attribute (and passes the value down to fontSize of style)
 *   - when font-size is n pixels, the height should be (n*1.5) pixels
 */

class Chip extends React.Component {
  constructor(props) {
    super();

    this.init(props);

    this.removable = props.removable || false;
    this.state = { removed: false };

    this.remove = this.remove.bind(this);
  }

  init(props) {
    const className = isString(props.className) ? props.className.trim() : '';

    this.attributes = {
      ...props,
      className: `ui-chip ${className}`.trim(),
    };

    delete this.attributes.removable;

    if (props.size !== undefined) {
      this.attributes.style = this.attributes.style || {};
      this.attributes.style.fontSize = parseInt(props.size);
      if (!isInteger(this.attributes.style.fontSize)) {
        delete this.attributes.style.fontSize;
      }
      delete this.attributes.size;
    }
  }

  remove() {
    this.setState(() => ({ removed: true }));
  }

  render() {
    const { children: label } = this.props;
    return (!this.state.removed && isString(label) &&
      <figure {...this.attributes}>
        <figcaption className="ui-chip-label">{ label }</figcaption>
        {this.removable &&
          <svg className="ui-chip-remove" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={this.remove}>
            <path fill="none" strokeWidth="1.06" d="M16,16 L4,4"></path>
            <path fill="none" strokeWidth="1.06" d="M16,4 L4,16"></path>
          </svg>
        }
      </figure>
    );
  }
}

Chip.propTypes = {
  removable: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.string,
};

export default Chip;
