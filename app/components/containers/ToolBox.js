import React from 'react';
import { connect } from 'react-redux';

import Action from '../../../utils/wrappers/redux/Action';
import * as ActionType from '../../../utils/definitions/action_types/toolbox';

const { TOGGLE_TOOL } = ActionType;

@connect(store => ({
  data: store.ToolBoxReducer,
}))
class ToolBox extends React.Component {
  constructor() {
    super();

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    const action = new Action(TOGGLE_TOOL, {
      name: this.props.name,
      index: event.target.dataset.index,
      checked: event.target.checked,
    });
    this.props.dispatch(action);
  }

  render() {
    const { name, displayName, data } = this.props;

    return (
      <div>
        <div>
          <h3>{displayName}</h3>
        </div>
        <ul className='tools'>
          {data[name].map((datum, index) => {
            const props = { ...datum, type: 'checkbox', onChange: this.handleToggle, 'data-index': index };

            delete props.reference;
            delete props.checked;

            return (
              <li key={`${datum.name}-${index}`}>
                <input { ...props } /> { props.name }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ToolBox;
