"use client";
import { useState } from "react";

import { useStore } from "../store/store";

import "bootstrap/dist/css/bootstrap.css";
import SideNavbar from "../components/SideNavbar/SideNavbar";
import './page.css'
import products from "../dummy_data/Product";


export default function Home() {
  const addToCart = useStore((state) => state.addToCart);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (productId) => {
    setLoading(true);
    try {
      await addToCart(productId);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  

  return (
    <div className="cont">
      <div className="top-bar">
      <h1 className="mt-4 mb-3">Product List</h1>
      <SideNavbar />
      </div>
      <div className="product-container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          
            <img src={product.image} alt="Product 1" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product.id)}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add to Cart"}
            </button>
          </div>
       
      ))}
      </div>
    </div>
  );
}


