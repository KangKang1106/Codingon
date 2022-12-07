import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { products } = props;
  // console.log("ProductList >>> ", products);
  return (
    <div className="ProductList">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product}></ProductItem>;
      })}
    </div>
  );
};

export default ProductList;
