import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreateProductForm() {


  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const createPost = async () => {
    await axios.post("http://localhost:4001/products", {
      name: name,
      imageUrl: imageUrl,
      price: price,
      description: description
    });

    navigate("/");
  }


  function handleSubmit(event) { 
    event.preventDefault();
    createPost();
  }


  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
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
            
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}

            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
