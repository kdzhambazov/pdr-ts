import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

type Props = {};

export const GlobalHeader = ({}: Props) => {
  const location = useLocation();
  const isPageWithBackButton = location && location.pathname !== "/";

  return (
    <>
      <div className="GlobalHeader__header">
        <img
          src="https://archello.s3.eu-central-1.amazonaws.com/images/2020/04/24/Design-interior-restaurant-Il-Calcio-01.1587743180.571.jpg"
          alt="interior"
        />

        <div className="GlobalHeader__sub-header">
          <h1 className="GlobalHeader__sub-header-title">
            The Harbor House Restaurant
          </h1>
          <div className="GlobalHeader__sub-header-img">
            <img
              className="GlobalHeader__sub-header-logo"
              src="https://img.freepik.com/premium-vector/chef-restaurant-logo-inspiration_139869-449.jpg?w=2000"
              alt="Logo"
            />
          </div>
          {isPageWithBackButton && (
            <Link className={"GlobalHeader__sub-header-link"} to="/">
              <i className={"GlobalHeader__sub-header-icon"}>&#10094;</i>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default GlobalHeader;
