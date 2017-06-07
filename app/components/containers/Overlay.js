import React from 'react';
import PropTypes from 'prop-types';

import TypeChecker from '../../../utils/TypeChecker';
import OverlayController from '../../../utils/OverlayController';

// TODO: tutorial on how to get out of Overlay
class Overlay extends React.Component {
  constructor() {
    super();
    this.hide = this.hide.bind(this);
  }

  hide(event) {
    const { onClick } = this.props;

    OverlayController.hide(this.element);

    if (!TypeChecker.isUndefined(onClick)) {
      onClick(event);
    }
  }

  render() {
    const { isVisible } = this.props;

    const attributes = {
      ...this.props,
      onClick: this.hide,
      className: `overlay ${isVisible ? 'overlay-show' : 'overlay-hide'}`,
    };

    if (!TypeChecker.isUndefined(attributes.isVisible)) {
      delete attributes.isVisible;
    }

    return (
      <div {...attributes} ref={(element) => { this.element = element; }}>
        { this.props.children }
      </div>
    );
  }
}

Overlay.propTypes = {
  onClick: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default Overlay;
