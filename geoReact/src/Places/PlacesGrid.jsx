import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../userContext";
import { PlaceGrid } from './PlaceGrid'

export default function PlacesGrid() {
  let { authToken, setAuthToken } = useContext(UserContext);
  let [places, setPlaces] = useState([]);

  const getPlaces = async(e) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "GET"
      })
      const resposta = await data.json();
      if (resposta.success === true) {
        setPlaces(resposta.data);
        console.log(resposta);
      }
      
      else {
        console.log(resposta);
      }
      

      }catch{
        console.log("Error");
        alert("catch");  
      }
      
  }
  useEffect(() => { getPlaces(); }, []);
  return (
    <>
          { places.map (  (place)=> ( 
              <div key={place.id} >
                <PlaceGrid place={place} />
              </div>  
          ) ) }

    </>
  )
}
