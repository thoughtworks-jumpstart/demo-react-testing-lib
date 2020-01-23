import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: 0,
    };
  }

  render() {
    return (
      <div data-testid="Counter">
        Counter Value: {this.state.countValue}
        <button
          onClick={() =>
            this.setState(state => {
              return { countValue: state.countValue + 1 };
            })
          }
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
