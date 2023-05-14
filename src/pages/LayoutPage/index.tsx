import React from "react";
import { Outlet } from "react-router-dom";
import BasketToolbar from "../../components/BasketToolbar";
import GlobalHeader from "../../components/GlobalHeader";
import "./styles.css";

const LayoutPage = () => {
  return (
    <>
      <div className="layout">
        <GlobalHeader />
        <div className="content" >
          <Outlet />
        </div>
        <BasketToolbar products={[]} />
      </div>
    </>
  );
};

export default LayoutPage;
