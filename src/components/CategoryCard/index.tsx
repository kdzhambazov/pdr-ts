import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

type Props = {
  category: Category;
};

export const CategoryCard = ({ category }: Props) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`../categories/${category.id}`);
  };


  return (
    <>
      <div className="CategoryCard" onClick={handleNavigation}>
        <img className="CategoryCard__image" src={category.image} />
        <span className="CategoryCard__name">{category.name}</span>
      </div>
    </>
  );
};

export default CategoryCard;
