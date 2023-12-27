import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewProductPage() {

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    getPost();
  }, [])

const getPost = async () => {
  const response = await axios.get(`http://localhost:4001/products/${param.Id}`);
  setName(response.data.data.name);
  setImageUrl(response.data.data.imageUrl);
  setPrice(response.data.data.price);
  setDescription(response.data.data.description)
  console.log(response)
}

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title - {name}</h2>
        <p>Content - {description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
