import React, { useState } from "react";
import CategoryCard, { Category } from "../../components/CategoryCard";
import ProductCard, { Product } from "../../components/ProductCard";
import { Search } from "../../components/Search";
import { categories, products } from "../../mocks";
import "./styles.css";

const HomePage = () => {
  const [searchList, setSearchList] = useState<Product[] | []>([]);
  const handleAddProduct = (product: Product) => {};
  const handleRemoveProduct = (product: Product) => {};

  const filtersearchListOfCategories = (keyword: string) => {
    if (!keyword) {
      setSearchList([]);
      return;
    }

    const list = products.filter((product: Product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );

    setSearchList(list);
  };

  return (
    <div className="app">
      <div className="app__list">
        <Search onSearch={filtersearchListOfCategories} />
        {categories && !searchList.length
          ? categories.map((category: Category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          : searchList.map((product: Product) => (
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
