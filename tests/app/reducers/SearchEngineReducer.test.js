import SearchEngineReducer from '../../../app/reducers/SearchEngineReducer';
import actionTypes from '../../../utils/definitions/action_types/SearchEngineActionTypes';

// TODO: may need stub/spy REST call in future
describe('SearchEngineReducer', () => {
  const state = [];
  const action = {};
  const reducer = SearchEngineReducer;

  afterEach(() => {
    action.type = '';
    action.payload = {};
  });

  describe('Action Type: \'SEARCH_BY_NAME\'', () => {
    it('should return an array with Google when typing \'google\'', () => {
      action.type = actionTypes.SEARCH_BY_NAME;
      action.payload = { keyword: 'google' };

      const nextState = reducer(state, action);

      expect(nextState.length).toBeGreaterThan(0);
      expect(nextState[0].name).toBe('Google');
      expect(nextState[0].location).toBeDefined();
      expect(nextState[0].location.text).toBe('Mountain View, CA');
    });

    it('should return an empty array with when keyword length is less than 2', () => {
      action.type = actionTypes.SEARCH_BY_NAME;
      action.payload = { keyword: '' };
      const nextState = reducer(state, action);
      expect(nextState).toEqual([]);
    });

    it('should return an empty array with when payload does not have a keyword', () => {
      action.type = actionTypes.SEARCH_BY_NAME;
      action.payload = undefined;
      const nextState = reducer(state, action);
      expect(nextState).toEqual([]);
    });
  });

  describe('Unknown Action Type', () => {
    it('should return an empty array', () => {
      const nextState = reducer();
      expect(nextState).toEqual([]);
    });
  });
});
