import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="Header">
      <span>Router Tutorial</span>
      <div>
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/products" className="menu-item">
          Products
        </Link>
      </div>
    </main>
  );
};

export default Header;
