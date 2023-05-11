import React from "react";
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

  return (
    <>
      <div className="CategoryCard">
        <img className="CategoryCard__image" src={category.image} />
        <span className="CategoryCard__name">{category.name}</span>
      </div>
    </>
  );
};

export default CategoryCard;
