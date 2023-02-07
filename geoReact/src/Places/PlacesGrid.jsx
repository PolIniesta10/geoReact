import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../userContext";
import { PlaceGrid } from './PlaceGrid'

export default function PlacesGrid() {
  let { userEmail, setUserEmail, authToken, setAuthToken } = useContext(UserContext);
  let [places, setPlaces] = useState([]);
  let [refresh,setRefresh] = useState(false)

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

  useEffect(() => { getPlaces(); }, [refresh]);


  const deletePlace = async(id) => {
    try{
      
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+ id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "DELETE"
      })

      const resposta = await data.json();
      if (resposta.success === true)
        console.log(resposta),
        setRefresh(!refresh);
      
      else alert("La resposta no a triomfat");

    }catch{
      console.log("Error");
      alert("catch");  
    }
  }

  return (
    <>
          { places.map ( (place)=> (
              (place.visibility.name != 'private' || userEmail == place.author.email) && (<div key={place.id} >
              <PlaceGrid place={place} deletePlace={deletePlace} setRefresh={setRefresh} refresh={refresh}/></div>)
          ))}

    </>
  )
}
