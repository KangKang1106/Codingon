// import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import "./styles/Common.scss";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setProducts(res.data.slice(0, 10));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          ></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetailPage products={products} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
