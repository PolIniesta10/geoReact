import React from 'react'
import { placeMarkReducer } from './placeMarkReducer';
import { PlaceMark } from "./PlaceMark";
import { useReducer } from "react";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
//const initialState = [];
//const init = () => {
  //return JSON.parse(localStorage.getItem("placesMarks")) || [];
//};

const PlaceMarks = () => {
    const {marks} = useSelector(state => state.placeMarks)
    //const [localPlacemark, setLocalPlacemark] = useState(init);
    console.log(marks);
    useEffect ( ()=>{
      localStorage.setItem('placesMarks',JSON.stringify(marks))
  },[marks])
    console.log(marks);
    //const handleDeleteMark = (id) => {
        //console.log("AQui arribo " + id);
        //dispatchPlaces({  
            //type: "Del Mark",
            //payload: id
        //});
        //console.log("mark borrado")
        //const updatedPlacemark = placemark.filter(place => place.id !== id);
        //setPlacemark(updatedPlacemark);
        //localStorage.setItem("placesMarks", JSON.stringify(updatedPlacemark));
    //};
    
    return (
        <>
        <div>
        <table className="tableTodos">
            {marks.map((mark) => (<tr className="trTableTodos" key={mark.id}>
              <PlaceMark
                mark={mark}
                key={mark.id}
                //handleDeleteMark={handleDeleteMark}
              /></tr>
            ))}
          </table>
        </div>
    
        </>
        
    )
}
export default PlaceMarks