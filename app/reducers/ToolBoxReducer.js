import cloneDeep from 'lodash/cloneDeep';

import initial from '../../utils/definitions/defaults/toolbox';
import * as ActionType from '../../utils/definitions/action_types/toolbox';

const { TOGGLE_TOOL } = ActionType;

const ToolBoxReducer = (state=initial, action) => {
  switch (action.type) {
    case TOGGLE_TOOL: {
      const { name, index, checked } = action.payload;
      const result = cloneDeep(state);
      result[name][index].checked = checked;
      return result;
    }
    default: return state;
  }
};

export default ToolBoxReducer;
