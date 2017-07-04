import actionTypes from '../../utils/definitions/action_types/SearchEngineActionTypes';

import companies from '../../utils/definitions/companies.json'; // temporary

const SearchEngineReducer = (state=[], action={}) => {
  const { SEARCH_BY_NAME } = actionTypes;
  switch (action.type) {
    case SEARCH_BY_NAME: {
      const { keyword } = (action.payload || {});

      if (!keyword || keyword.length < 2) {
        return [];
      }

      // TODO: this logic should be in API level
      return companies.filter((company, i) => i < 5 && company.name.toLowerCase().indexOf(keyword) !== -1);
    }
    default: return [];
  }
};

export default SearchEngineReducer;
