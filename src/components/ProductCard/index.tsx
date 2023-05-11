import React from "react";
import "./styles.css";

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  cost: number;
  weight: string;
  image: string;
};

type Props = {
  product: Product;
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (product: Product) => void;
};

export const ProductCard = ({
  product,
  handleAddProduct,
  handleRemoveProduct,
}: Props) => {
  return (
    <>
      <div className="ProductCard">
        <div className="ProductCard__image">
          <img src={product.image} />
        </div>
        <div className="ProductCard__content">
          <div className="ProductCard__header">
            <p className="ProductCard__name">{product.name}</p>
            <p className="ProductCard__weight">{product.weight}</p>
          </div>
          <p className="ProductCard__description">{product.description}</p>
          <div className="ProductCard__sub-header">
            <p className="ProductCard__cost">{product.cost}$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
