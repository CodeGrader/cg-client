import React from 'react';
import PropTypes from 'prop-types';

import TypeChecker from '../../utils/TypeChecker';

const { isString, isInteger, isUndefined, isObject } = TypeChecker;

/*
 * Sanity Checklist:
 *   - default case --> checked=false, size=default font-size
 *   - Switch has checked attributes (and passes the value down to defaultChecked)
 *   - Switch has defaultChecked and is set to true
 *   - Switch has defaultChecked and is set to false
 *   - Switch is disabled --> should look dimmer than enabled switch
 *   - Switch has size attribute (and passes the value down to fontSize of style)
 *   - when font-size is (n*20) pixels, the padding size should be n pixels
 *   - when font-size is (n*20) pixels, the width is (n*20)*2 pixels and the height is (n*20) pixels
 */

class Switch extends React.Component {
  constructor(props) {
    super();
    this.init(props);
  }

  init(props) {
    const className = isString(props.className) ? props.className.trim() : '';

    const attributes = {
      ...props,
      type: 'checkbox',
      className: `ui-switch ${className}`.trim(),
    };

    if (!isUndefined(attributes.checked)) {
      if (isUndefined(attributes.defaultChecked)) {
        attributes.defaultChecked = attributes.checked;
      }
      delete attributes.checked;
    }

    if (!isUndefined(attributes.size)) {
      attributes.style = isObject(attributes.style) ? attributes.style : {};
      attributes.style.fontSize = parseInt(attributes.size);
      if (!isInteger(attributes.style.fontSize)) {
        delete attributes.style.fontSize;
      }
      delete attributes.size;
    }

    this.attributes = attributes;
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (<input {...this.attributes} />);
  }
}

Switch.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
};

export default Switch;
