import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../ProductCard";
import "./styles.css";

type Props = {
  products: Product[];
};

export const BasketToolbar = ({ products }: Props) => {
  const productsCount = products.length;
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("../order");
  };

  return (
    <div className="BasketToolbar" onClick={handleCheckout}>
        <span>{`Go to basket with ${productsCount} items`}</span>
    </div>  
  );
};

export default BasketToolbar;
