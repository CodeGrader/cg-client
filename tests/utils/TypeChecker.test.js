import TypeChecker from '../../utils/TypeChecker';

describe('TypeChecker', () => {
  describe('#isNumber', () => {
    it('should return true for integer', () => {
      expect(TypeChecker.isNumber(0)).toBe(true);
      expect(TypeChecker.isNumber(1)).toBe(true);
      expect(TypeChecker.isNumber(-1)).toBe(true);
    });

    it('should return true for float', () => {
      expect(TypeChecker.isNumber(0.1)).toBe(true);
      expect(TypeChecker.isNumber(1.1)).toBe(true);
      expect(TypeChecker.isNumber(-1.1)).toBe(true);
    });

    it('should return true for NaN', () => {
      expect(TypeChecker.isNumber(NaN)).toBe(true);
    });

    it('should return true for Infinity', () => {
      expect(TypeChecker.isNumber(Infinity)).toBe(true);
    });

    it('should return false for string', () => {
      expect(TypeChecker.isNumber('')).toBe(false);
    });

    it('should return false for boolean', () => {
      expect(TypeChecker.isNumber(true)).toBe(false);
    });

    it('should return false for object', () => {
      expect(TypeChecker.isNumber({})).toBe(false);
    });

    it('should return false for array', () => {
      expect(TypeChecker.isNumber([])).toBe(false);
    });

    it('should return false for function', () => {
      expect(TypeChecker.isNumber(() => {})).toBe(false);
    });

    it('should return false for null', () => {
      expect(TypeChecker.isNumber(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(TypeChecker.isNumber(undefined)).toBe(false);
    });
  });

  describe('#isInteger', () => {
    it('should return true for integer', () => {
      expect(TypeChecker.isInteger(0)).toBe(true);
      expect(TypeChecker.isInteger(1)).toBe(true);
      expect(TypeChecker.isInteger(-1)).toBe(true);
    });

    it('should return false for float', () => {
      // expect(TypeChecker.isInteger(0.0)).toBe(false);
      expect(TypeChecker.isInteger(0.1)).toBe(false);
      expect(TypeChecker.isInteger(1.1)).toBe(false);
      expect(TypeChecker.isInteger(-1.1)).toBe(false);
    });

    it('should return false for NaN', () => {
      expect(TypeChecker.isInteger(NaN)).toBe(false);
    });

    it('should return false for Infinity', () => {
      expect(TypeChecker.isInteger(Infinity)).toBe(false);
    });

    it('should return false for string', () => {
      expect(TypeChecker.isInteger('')).toBe(false);
    });

    it('should return false for boolean', () => {
      expect(TypeChecker.isInteger(true)).toBe(false);
    });

    it('should return false for object', () => {
      expect(TypeChecker.isInteger({})).toBe(false);
    });

    it('should return false for array', () => {
      expect(TypeChecker.isInteger([])).toBe(false);
    });

    it('should return false for function', () => {
      expect(TypeChecker.isInteger(() => {})).toBe(false);
    });

    it('should return false for null', () => {
      expect(TypeChecker.isInteger(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(TypeChecker.isInteger(undefined)).toBe(false);
    });
  });

  describe('#isFloat', () => {
    it('should return false for integer', () => {
      expect(TypeChecker.isFloat(0)).toBe(false);
      expect(TypeChecker.isFloat(1)).toBe(false);
      expect(TypeChecker.isFloat(-1)).toBe(false);
    });

    it('should return true for float', () => {
      // expect(TypeChecker.isFloat(0.0)).toBe(true);
      expect(TypeChecker.isFloat(0.1)).toBe(true);
      expect(TypeChecker.isFloat(1.1)).toBe(true);
      expect(TypeChecker.isFloat(-1.1)).toBe(true);
    });

    it('should return false for NaN', () => {
      expect(TypeChecker.isFloat(NaN)).toBe(false);
    });

    it('should return false for Infinity', () => {
      expect(TypeChecker.isFloat(Infinity)).toBe(false);
    });

    it('should return false for string', () => {
      expect(TypeChecker.isFloat('')).toBe(false);
    });

    it('should return false for boolean', () => {
      expect(TypeChecker.isFloat(true)).toBe(false);
    });

    it('should return false for object', () => {
      expect(TypeChecker.isFloat({})).toBe(false);
    });

    it('should return false for array', () => {
      expect(TypeChecker.isFloat([])).toBe(false);
    });

    it('should return false for function', () => {
      expect(TypeChecker.isFloat(() => {})).toBe(false);
    });

    it('should return false for null', () => {
      expect(TypeChecker.isFloat(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(TypeChecker.isFloat(undefined)).toBe(false);
    });
  });

  describe('#isString', () => {
    it('should return true for string', () => {
      expect(TypeChecker.isString('')).toBe(true);
      expect(TypeChecker.isString('')).toBe(true);
      expect(TypeChecker.isString(' ')).toBe(true);
    });

    it('should return false for number', () => {
      expect(TypeChecker.isString(0)).toBe(false);
    });

    it('should return false for boolean', () => {
      expect(TypeChecker.isString(true)).toBe(false);
    });

    it('should return false for object', () => {
      expect(TypeChecker.isString({})).toBe(false);
    });

    it('should return false for array', () => {
      expect(TypeChecker.isString([])).toBe(false);
    });

    it('should return false for function', () => {
      expect(TypeChecker.isString(() => {})).toBe(false);
    });

    it('should return false for null', () => {
      expect(TypeChecker.isString(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(TypeChecker.isString(undefined)).toBe(false);
    });
  });

  describe('#isBoolean', () => {
    it('should return true for boolean', () => {
      expect(TypeChecker.isBoolean(true)).toBe(true);
      expect(TypeChecker.isBoolean(false)).toBe(true);
    });

    it('should return false for number', () => {
      expect(TypeChecker.isBoolean(0)).toBe(false);
    });

    it('should return false for string', () => {
      expect(TypeChecker.isBoolean('')).toBe(false);
    });

    it('should return false for object', () => {
      expect(TypeChecker.isBoolean({})).toBe(false);
    });

    it('should return false for array', () => {
      expect(TypeChecker.isBoolean([])).toBe(false);
    });

    it('should return false for function', () => {
      expect(TypeChecker.isBoolean(() => {})).toBe(false);
    });

    it('should return false for null', () => {
      expect(TypeChecker.isBoolean(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(TypeChecker.isBoolean(undefined)).toBe(false);
    });
  });

  describe('#isArray', () => {
    it('should return true for array', () => {
      expect(TypeChecker.isArray([])).toBe(true);
      expect(TypeChecker.isArray([0])).toBe(true);
      expect(TypeChecker.isArray([{}])).toBe(true);
      expect(TypeChecker.isArray([[]])).toBe(true);
      expect(TypeChecker.isArray([''])).toBe(true);
      expect(TypeChecker.isArray([false])).toBe(true);
      expect(TypeChecker.isArray([null])).toBe(true);
      expect(TypeChecker.isArray([undefined])).toBe(true);
      expect(TypeChecker.isArray([Infinity])).toBe(true);
      expect(TypeChecker.isArray([NaN])).toBe(true);
    });

    it('should return false for number', () => {
      expect(TypeChecker.isArray(0)).toBe(false);
    });

    it('should return false for string', () => {
      expect(TypeChecker.isArray('')).toBe(false);
    });

    it('should return false for boolean', () => {
      expect(TypeChecker.isArray(true)).toBe(false);
    });

    it('should return false for object', () => {
      expect(TypeChecker.isArray({})).toBe(false);
    });

    it('should return false for function', () => {
      expect(TypeChecker.isArray(() => {})).toBe(false);
    });

    it('should return false for null', () => {
      expect(TypeChecker.isArray(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(TypeChecker.isArray(undefined)).toBe(false);
    });
  });

  describe('#isObject', () => {
    it('should return true for object', () => {
      expect(TypeChecker.isObject({})).toBe(true);
      expect(TypeChecker.isObject({ foo: 'bar' })).toBe(true);
    });

    it('should return false for number', () => {
      expect(TypeChecker.isObject(0)).toBe(false);
    });

    it('should return false for string', () => {
      expect(TypeChecker.isObject('')).toBe(false);
    });

    it('should return false for boolean', () => {
      expect(TypeChecker.isObject(true)).toBe(false);
    });

    it('should return false for array', () => {
      expect(TypeChecker.isObject([])).toBe(false);
    });

    it('should return false for function', () => {
      expect(TypeChecker.isObject(() => {})).toBe(false);
    });

    it('should return false for null', () => {
      expect(TypeChecker.isObject(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(TypeChecker.isObject(undefined)).toBe(false);
    });
  });

  describe('#isFunction', () => {
    it('should return true for function', () => {
      expect(TypeChecker.isFunction(() => {})).toBe(true);
    });

    it('should return false for number', () => {
      expect(TypeChecker.isFunction(0)).toBe(false);
    });

    it('should return false for string', () => {
      expect(TypeChecker.isFunction('')).toBe(false);
    });

    it('should return false for boolean', () => {
      expect(TypeChecker.isFunction(true)).toBe(false);
    });

    it('should return false for object', () => {
      expect(TypeChecker.isFunction({})).toBe(false);
    });

    it('should return false for array', () => {
      expect(TypeChecker.isFunction([])).toBe(false);
    });

    it('should return false for null', () => {
      expect(TypeChecker.isFunction(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(TypeChecker.isFunction(undefined)).toBe(false);
    });
  });

  describe('#isUndefined', () => {
    it('should return true for undefined', () => {
      expect(TypeChecker.isUndefined(undefined)).toBe(true);
    });

    it('should return false for number', () => {
      expect(TypeChecker.isUndefined(0)).toBe(false);
    });

    it('should return false for string', () => {
      expect(TypeChecker.isUndefined('')).toBe(false);
    });

    it('should return false for boolean', () => {
      expect(TypeChecker.isUndefined(true)).toBe(false);
    });

    it('should return false for object', () => {
      expect(TypeChecker.isUndefined({})).toBe(false);
    });

    it('should return false for array', () => {
      expect(TypeChecker.isUndefined([])).toBe(false);
    });

    it('should return false for function', () => {
      expect(TypeChecker.isUndefined(() => {})).toBe(false);
    });

    it('should return false for null', () => {
      expect(TypeChecker.isUndefined(null)).toBe(false);
    });
  });
});
