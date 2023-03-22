import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsState, plantSearchState, onHandleRemovePlant, setPlantToEditState }) {

  // const handleEditPlant = (plant) => {
    // console.log(plant)
    // plantsState.map((plant) => {
    //   if(plant.id == event.target.id) {
    //     console.log(plant)
    //   } else {
    //     console.log("Not the plant")
    //   }
    // })
  // }

  return (
    <ul className="cards">
      {plantsState.map((plant) => {
        if (plant.name.toLowerCase().includes(plantSearchState.toLowerCase()))
        return (
          <PlantCard 
            plant={plant} 
            setPlantToEditState={setPlantToEditState} 
            onHandleRemovePlant={onHandleRemovePlant}
            key={plant.id} 
          />
        )
      })}
    </ul>
  );
}

export default PlantList;
