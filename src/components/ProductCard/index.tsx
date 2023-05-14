import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { add, remove } from "../../features/basket/basketSlice";
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

type ProductProps = {
  product: Product;
};

type ProductControlsProps = {
  products: Product[],
  handleAddProduct: (product: Product) => void,
  handleRemoveProduct: (product: Product) => void
} & ProductProps;

const CardControls = ({
  products,
  product,
  handleAddProduct,
  handleRemoveProduct
} : ProductControlsProps) => {
  const productInBasket: Product[] = products.filter(
    (currProduct) => currProduct.id === product.id
  );
  const productInBasketLen: number = productInBasket.length;

  if (products && !!productInBasketLen) {
    return (
      <>
      <div className="add_remove_button" onClick={() => handleRemoveProduct(product)}>
          <div className="line line_h"></div>
        </div>
        {!!productInBasketLen && (
          <span className="ProductCard__count">{productInBasketLen}</span>
        )}
        <div className="add_remove_button" onClick={() => handleAddProduct(product)}>
          <div className="line line_v"></div>
          <div className="line line_h"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="add_remove_button" onClick={() => handleAddProduct(product)}>
        <div className="line line_v"></div>
        <div className="line line_h"></div>
      </div>
    </>
  );
};

export const ProductCard = ({
  product
}: ProductProps) => {
  const dispatch = useAppDispatch();
  const basketProducts = useAppSelector(({ basket }) => basket.products);
  const handleAddProduct = (product: Product) => { dispatch(add(product)) };
  const handleRemoveProduct = (product: Product) => { dispatch(remove(product)) };

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
            <div className="ProductCard__action-header">
              {
              // The CardControls and make all the store actions instead of getting the as props from the parent component.
              // The point here is to demonstrate differennt types and the intersection(&) technique.
              }
              <CardControls 
                products={basketProducts}
                product={product}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
