import React from "react";

function NewPlantForm({ newPlantState, setNewPlantState, onHandlePlantSubmit }) {

  const handlePlantTextChange = (event) => {
    setNewPlantState({...newPlantState, [event.target.name]: event.target.value })
  }

  const handlePlantPriceChange = (event) => {
    setNewPlantState({...newPlantState, [event.target.name]: Number(event.target.value)})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onHandlePlantSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handlePlantTextChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handlePlantTextChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePlantPriceChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
