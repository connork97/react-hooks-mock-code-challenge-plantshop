import React, { useState } from "react";

function PlantCard({ plant, setPlantToEditState, onHandleRemovePlant }) {

  const [isInStock, setIsInStock] = useState(true)

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={() => setIsInStock(!isInStock)} >In Stock</button>
      ) : (
        <button onClick={() => setIsInStock(!isInStock)}>Out of Stock</button>
      )}
      <button id={plant.id} onClick={() => setPlantToEditState(plant)}>Edit Plant</button>
      <button id={plant.id} onClick={() => onHandleRemovePlant(plant.id)} >Remove Plant</button>
    </li>
  );
}

export default PlantCard;
