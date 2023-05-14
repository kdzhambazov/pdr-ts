import React from "react";
import { useParams } from "react-router-dom";
import ProductCard, { Product } from "../../components/ProductCard";
import "./styles.css";
import { products } from "../../mocks";


const CategoryPage = () => {
  const { categoryId } = useParams();

  const categoryProducts = products.filter(
    (product: Product) => product.categoryId === categoryId
  );

  return (
    <div className="category">
      <div className="category_list">
        {categoryProducts &&
          categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryPage;
