import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./Data";
import "./index.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Index = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  console.log(categories)

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category == category);
    setMenuItems(newItem);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categorie={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default Index;
