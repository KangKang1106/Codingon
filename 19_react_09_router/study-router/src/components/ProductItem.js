import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  // console.log("ProductItem >>> ", product);

  return (
    <Link className="ProductItem" to={"/product/" + product.id}>
      <ul>
        <li className="name">상품명 : {product.name}</li>
        <li className="body">상세설명 : {product.body.slice(0, 80)}...</li>
      </ul>
    </Link>
  );
};

export default ProductItem;
