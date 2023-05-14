import React from "react";
import { useAppSelector } from '../../app/hooks'
import { Outlet } from "react-router-dom";
import BasketToolbar from "../../components/BasketToolbar";
import GlobalHeader from "../../components/GlobalHeader";
import "./styles.css";

const LayoutPage = () => {
  const products = useAppSelector(({ basket }) => basket.products);

  return (
    <>
      <div className="layout">
        <GlobalHeader />
        <div className="content" >
          <Outlet />
        </div>
        <BasketToolbar productsCount={products.length} />
      </div>
    </>
  );
};

export default LayoutPage;
