// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;





// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');
//   const [size, setSize] = useState('');
//   const [bestSeller, setBestSeller] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');

//   // Handle file selection
//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     if (selectedFiles.length > 4) {
//       alert("You can only upload up to 4 images.");
//       setFiles(selectedFiles.slice(0, 4)); // Limit to 4 files
//     } else {
//       setFiles(selectedFiles);
//     }
//   };

//   // Handle form submission and file upload
//   const handleUpload = async () => {
//     if (!files.length || !name || !description || !price || !category || !subcategory || !size) {
//       alert("Please fill in all fields and select up to 4 images.");
//       return;
//     }

//     const formData = new FormData();
//     files.forEach((file, index) => {
//       formData.append(`image${index + 1}`, file);
//     });
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     formData.append("category", category);
//     formData.append("subcategory", subcategory);
//     formData.append("size", size);
//     formData.append("bestSeller", bestSeller);

//     try {
//       setUploading(true);
//       setUploadStatus('Uploading...');

//       const response = await axios.post('http://localhost:4000/api/product/add', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.data.success) {
//         setUploadStatus('File and product data uploaded successfully!');
//       } else {
//         setUploadStatus('Upload failed.');
//       }
//     } catch (error) {
//       setUploadStatus('An error occurred while uploading the file.');
//       console.error(error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Product and Images to Cloudinary</h2>
//       <input
//         type="file"
//         onChange={handleFileChange}
//         multiple
//         accept="image/*"
//       /><br />
      
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       /><br />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       ></textarea><br />

//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       /><br />

//       <input
//         type="text"
//         placeholder="Category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       /><br />

//       <input
//         type="text"
//         placeholder="Subcategory"
//         value={subcategory}
//         onChange={(e) => setSubcategory(e.target.value)}
//       /><br />

//       <input
//         type="text"
//         placeholder="Size"
//         value={size}
//         onChange={(e) => setSize(e.target.value)}
//       /><br />

//       <label>
//         <input
//           type="checkbox"
//           checked={bestSeller}
//           onChange={(e) => setBestSeller(e.target.checked)}
//         />
//         Best Seller
//       </label><br />

//       <button onClick={handleUpload} disabled={uploading}>
//         {uploading ? 'Uploading...' : 'Upload'}
//       </button>
//       <p>{uploadStatus}</p>
//     </div>
//   );
// };

// export default App;
