import React from "react";
import { useState } from "react/cjs/react.development";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  })

  function handleChange(e){
    const name = e.target.name
    let value = e.target.value
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    formData.id = uuid()
    onItemFormSubmit(formData)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
