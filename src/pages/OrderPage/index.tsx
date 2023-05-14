import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import ProductCard, { Product } from "../../components/ProductCard";
import "./styles.css";

const OrderPage = () => {
  const navigate = useNavigate();
  const basket = useAppSelector(({ basket }) => basket);
  const products = basket.products
  const productsCount = products.length;
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (!productsCount) {
      navigate("../");
    }
  }, [basket]);

  useEffect(() => {
    if (productsCount) {
      setTotalCost(sumAllProducts(products));
    }
  }, [basket]);

  const sumAllProducts = (products: Product[]) => {
    return products.reduce(
      (previousValue: number, currentValue: Product) => previousValue + currentValue.cost,
      0
    );
  }

  // Make a copy of products because of the sorting method. Because of the Redux store the producs array i a readonly object / array.
  const sortedProductsById = products ? [...products].sort((a: Product, b: Product) => Number(a.id) - Number(b.id)): [];

  return (
    <div className="basket">
      <div className="basket_list">
        {sortedProductsById.map((product, key) => <ProductCard key={key} product={product} />)}
        <hr
          style={{
            height: 3,
            width: "100%",
            backgroundColor: "goldenrod",
            border: "none",
          }}
        />
        <div className="basket-checkout">
          <div className="basket-checkout-content">
            <div className="basket-checkout-count">
              <div className="basket-checkout-count-header"> Total </div>
              <div className="basket-checkout-count-subheader">
                <span>items { productsCount }</span>
              </div>
            </div>
            <div className="basket-checkout-sum">
              <div>{totalCost.toFixed(2)}$</div>
            </div>
          </div>
          <button> Checkout </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
