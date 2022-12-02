import React from "react";

class HandlerEx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hello World!",
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>{name}</div>
        <button onClick={() => this.setState({ name: "Goodbye World!" })}>
          버튼
        </button>
      </div>
    );
  }
}

export default HandlerEx;
