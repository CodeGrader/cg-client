import React from 'react';

export class HangmanLetter extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default HangmanLetter;
