import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const param = useParams();

  function handleSubmit() { 
    editPost();
    navigate("/")
  }

  useEffect(() => {
    getPost();
  }, [])

  const getPost = async () => {
    const response = await axios.get(`http://localhost:4001/products/${param.Id}`);
    setName(response.data.data.name);
    setImageUrl(response.data.data.imageUrl);
    setPrice(response.data.data.price);
    setDescription(response.data.data.description)
  };

  const editPost = async () => {
    await axios.put(`http://localhost:4001/products/${param.Id}`, {
      name: name,
      imageUrl: imageUrl,
      price: price,
      description: description
    })
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"

            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}

          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"

            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
            value={imageUrl}

          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"

            onChange={(event) => {
              setPrice(event.target.value);
            }}
            value={price}

          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"

            onChange={(event) => {setDescription(event.target.value);
            }}
            value={description}

            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
