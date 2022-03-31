import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedName, setSelectedName] = useState('')
  const [newItems, setNewItems] = useState(items)

  function handleSearchChange(event){
    setSelectedName(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemFormSubmit(element){
    setNewItems([...newItems, element])
    console.log(element)
  }

  const itemsToDisplay = selectedName === "" ? newItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }) : newItems.filter((item) => {
    
    return item.name.includes(selectedName) ? item.name : null
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={selectedName} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
