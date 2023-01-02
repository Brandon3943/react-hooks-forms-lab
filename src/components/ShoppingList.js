import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  

  function onSearchChange(e) {
    setSearch(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }



  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchFilter = itemsToDisplay.filter(item => {
    // if the item in the searchbar is included in the product name, return true.
    return item.name.toUpperCase().includes(search.toUpperCase());
  }).map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onSearchChange={onSearchChange} search={search} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {searchFilter}
      </ul>
    </div>
  );
}

export default ShoppingList;
