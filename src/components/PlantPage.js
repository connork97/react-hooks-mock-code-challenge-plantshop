import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import PlantEditForm from "./PlantEditForm";

function PlantPage() {

  const [plantsState, setPlantsState] = useState([])
  
  const [newPlantState, setNewPlantState] = useState({
    name: "",
    image: "",
    price: 0
  })
  
  const [plantSearchState, setPlantSearchState] = useState("")

  const [plantToEditState, setPlantToEditState] = useState({
    id: 0,
    name: "",
    image: "",
    price: ""
  })

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((plantArr) => setPlantsState(plantArr))
  }, [])

  const handlePlantSubmit = (event) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantState),
    })
    .then((response) => response.json())
    .then((newPlant) => addToPlantsState(newPlant))
  }

  const addToPlantsState = (newPlant) => {
    setPlantsState([...plantsState, newPlant])
  }

  const handlePlantEditFormSubmit = (event) => {
    event.preventDefault();
    const editedPlantsState = plantsState.map((plant) => {
      if (plant.id == plantToEditState.id) {
        handleEditedPlant(plantToEditState.id)
        return plant = plantToEditState
      } else {
        return plant
      }
    })
    setPlantsState(editedPlantsState)
  }

  const handleEditedPlant = (editedPlantId) => {
    fetch("http://localhost:6001/plants/" + editedPlantId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantToEditState)
    })
    .then((response) => response.json())
    .then((newPlantData) => console.log(newPlantData))
  }

  const handleRemovePlant = (plantId) => {
    fetch("http://localhost:6001/plants/" + plantId, {
      method: "DELETE"
    })
    .then(() => setPlantsState(plantsState.filter((plant) => plant.id !== plantId)))
  }

  return (
    <main>
      <NewPlantForm 
        newPlantState={newPlantState} 
        setNewPlantState={setNewPlantState} 
        onHandlePlantSubmit={handlePlantSubmit} 
      />
      <Search 
        setPlantSearchState={setPlantSearchState} 
        plantsState={plantsState} 
        setPlantsState={setPlantsState} 
      />
      <PlantList 
        plantsState={plantsState} 
        plantSearchState={plantSearchState} 
        setPlantToEditState={setPlantToEditState} 
        onHandleRemovePlant={handleRemovePlant} 
      />
      <PlantEditForm 
        plantToEditState={plantToEditState} 
        setPlantToEditState={setPlantToEditState} 
        onPlantEditFormSubmit={handlePlantEditFormSubmit} 
      />
    </main>
  );
}

export default PlantPage;
