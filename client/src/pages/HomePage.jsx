import { useState, useEffect } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4001/products");
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const deletePost= async (idPost) => {
    await axios.delete(`http://localhost:4001/products/${idPost}`);
    getProducts()
  }

  const navigate = useNavigate();

  function handleView(id) {
    navigate(`/ViewProductPage/${id}`)
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>

        <Link to="/CreateProductPage"><button>Create Product</button></Link>

      </div>
      <div className="product-list">
        {products.map((product,index) => {
          return (
            <div key={index} className="product">
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/250/250"
                  alt="some product"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button onClick={() => {
                    handleView(product.id)
                  }} className="view-button">View</button>
                  <button onClick={() => {
                    navigate(`/EditProductPage/${product.id}`)
                  }} className="edit-button">Edit</button>
                </div>
              </div>

              <button onClick={() => {
                deletePost(product.id)
              }} className="delete-button">x</button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
