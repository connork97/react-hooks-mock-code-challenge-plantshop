import React from "react";

const PlantEditForm = ({ plantToEditState, setPlantToEditState, onPlantEditFormSubmit }) => {

    const handleEditPlant = (event) => {
        const plantTarget = event.target.name === "price" ? Number(event.target.value) : event.target.value
        setPlantToEditState({...plantToEditState, [event.target.name]: plantTarget})        
    }

    // const handleEditPlant = (event) => {
    //     event.target.name === "price" ?
    //     setPlantToEditState({...plantToEditState, [event.target.name]: Number(event.target.value)})        
    //     : setPlantToEditState({...plantToEditState, [event.target.name]: event.target.value})        
    // }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Plant Edit Form</h2>
            <form onSubmit={onPlantEditFormSubmit}>
                <input type="text" name="name" placeholder="New Name" value={plantToEditState.name} style={{textAlign:"center"}} onChange={handleEditPlant} />
                <input type="text" name="image" placeholder="New Image" value={plantToEditState.image} style={{textAlign:"center"}} onChange={handleEditPlant} />
                <input type="number" name="price" placeholder="New Price" value={plantToEditState.price} style={{textAlign:"center"}} onChange={handleEditPlant} />
                <br></br><br></br>
                <button>Submit Edit</button>
            </form>
            <br></br><br></br>
        </div>
    )
}

export default PlantEditForm;