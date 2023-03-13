import React from 'react'
import { placeMarkReducer } from './placeMarkReducer';
import { PlaceMark } from "./PlaceMark";
import { useReducer } from "react";

const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("placemark")) || [];
};

const PlaceMarks = () => {
    const [placemark, dispatchPlaces] = useReducer(placeMarkReducer, initialState, init);

    const handleDeleteMark = (id) => {
        console.log("Aqui arribo " + id);
        dispatchPlaces({  
            type: "Del Mark",
            payload: id
        });
        console.log("mark borrado")
        const updatedPlacemark = placemark.filter(place => place.id !== id);
        localStorage.setItem("placemark", JSON.stringify(updatedPlacemark));
        
    };

    return (
        <>
        <div>
        <table className="tableTodos">
            {placemark.map((place) => (<tr className="trTableTodos">
              <PlaceMark
                key={place.id}
                place={place}
                handleDeleteMark={handleDeleteMark}
              /></tr>
            ))}
          </table>
        </div>
    
        </>
        
    )
}
export default PlaceMarks