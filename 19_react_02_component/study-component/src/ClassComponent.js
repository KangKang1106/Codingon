import React from "react";
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
  // 클래스형 컴포넌트 render() 필수
  render() {
    // console.log(this.props);
    const { name, students } = this.props;

    const teacher = "Kang";

    // JSX 리턴
    return (
      <>
        <h1>Hello, {teacher}</h1>
        <p>여기는 Class Component</p>
        <p>
          {name} 수업 시간. 학생수는 {students}명입니다.
        </p>
      </>
    );
  }

  // static defaultProps = {
  //   name: "야호",
  // };

  // static propTypes = {
  //   name: PropTypes.string,
  //   number: PropTypes.number.isRequired,
  // };
}
ClassComponent.defaultProps = {
  name: "야호",
};

ClassComponent.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
};

export default ClassComponent;
