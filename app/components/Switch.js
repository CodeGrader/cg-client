import React from 'react';

import TypeChecker from '../../utils/TypeChecker';

const { isString, isInteger } = TypeChecker;

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
const Switch = (props) => {
  props.className = isString(props.className) ? props.className.trim() : '';

  const attributes = {
    ...props,
    type: 'checkbox',
    className: `ui-switch ${props.className}`.trim(),
  };

  if (attributes.checked !== undefined) {
    if (attributes.defaultChecked === undefined) {
      attributes.defaultChecked = attributes.checked;
    }
    delete attributes.checked;
  }

  if (attributes.size !== undefined) {
    attributes.style = attributes.style || {};
    attributes.style.fontSize = parseInt(attributes.size);
    if (!isInteger(attributes.style.fontSize)) {
      delete attributes.style.fontSize;
    }
    delete attributes.size;
  }

  return (<input {...attributes} />);
};

export default Switch;
