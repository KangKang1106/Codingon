import React from "react";
import PropTypes from "prop-types";

class Button2 extends React.Component {
  render() {
    const { text, valid } = this.props;

    return (
      <>
        <h1>{text}</h1>
        <button onClick={valid}>콘솔 메시지</button>
      </>
    );
  }
}

Button2.defaultProps = {
  text: "이건 기본 text Props 입니다.",
};

Button2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button2;
