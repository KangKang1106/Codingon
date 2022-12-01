import "./App.css";

const Food = (props) => {
  const { food } = props;

  return (
    <div>
      <p>
        가장 좋아하는 음식은 <b className="red">{food}</b>입니다.
      </p>
    </div>
  );
};

Food.defaultProps = {
  food: "비빔밥",
};

export default Food;
