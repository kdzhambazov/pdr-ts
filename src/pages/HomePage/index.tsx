import React from "react";
import CategoryCard, { Category } from "../../components/CategoryCard";
import ProductCard, { Product } from "../../components/ProductCard";
import { categories, products } from "../../mocks";
import "./styles.css";

const HomePage = () => {
  const handleAddProduct = (product: Product) => {};
  const handleRemoveProduct = (product: Product) => {};

  return (
    <div className="app">
      <div className="app__list">
        {categories ? categories.map((category: Category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          : products.map((product: Product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
