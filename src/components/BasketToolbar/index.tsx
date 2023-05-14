import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../ProductCard";
import "./styles.css";

type Props = {
  productsCount: number;
};

export const BasketToolbar = ({ productsCount }: Props) => {
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
