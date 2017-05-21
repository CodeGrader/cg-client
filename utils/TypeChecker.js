class TypeChecker {
  static isNumber(value) {
    return typeof value === 'number';
  }

  static isInteger(value) {
    return TypeChecker.isNumber(value) && isFinite(value) && value % 1 === 0;
  }

  static isFloat(value) {
    return TypeChecker.isNumber(value) && isFinite(value) && value % 1 !== 0;
  }

  static isString(value) {
    return typeof value === 'string';
  }

  static isBoolean(value) {
    return typeof value === 'boolean';
  }

  static isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  static isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }

  static isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]';
  }

  static isUndefined(value) {
    return typeof value === 'undefined';
  }
}

export default TypeChecker;
