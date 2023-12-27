import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return <div className="App">{/* Start coding here */
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/CreateProductPage" element={<CreateProductPage />} />
      <Route path="/EditProductPage/:Id" element={<EditProductPage/>} />
      <Route path="/ViewProductPage/:Id" element={<ViewProductPage/>} />
    </Routes>
  </BrowserRouter>

  }</div>;




  




}

export default App;
