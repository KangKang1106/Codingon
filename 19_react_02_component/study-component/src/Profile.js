import "./App.css";
import dog from "./dog.jpg";

const Profile = (props) => {
  const { title, author, price, type } = props;

  return (
    <div>
      <div className="bg">
        <h1 className="title">{title}</h1>
        <img src={dog} className="dog" alt="dog" />
        <h2 className="subtitle">멍멍</h2>
        <div className="imfor">저자 : {author}</div>
        <div className="imfor">가격 : {price}</div>
        <div className="imfor">구분 : {type}</div>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  title: "이번 주 베스트셀러",
  author: "kang",
  price: 100,
  type: "동물",
};

export default Profile;
