import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../userContext";
import { PlaceGrid } from './PlaceGrid'
import useFetch from '../hooks/useFetch';

export const PlacesGrid = () => {
  // desa el retorn de dades de l'api places
  let [ places, setPlaces ] = useState([]);
  // Ho utilitzem per provar un refresc quan esborrem un element
  let [refresca,setRefresca] = useState(false)
  // Dades del context. Ens cal el token per poder fer les crides a l'api
  let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)

  let { data,error,loading,reRender} = useFetch("https://backend.insjoaquimmir.cat/api/places",
  {
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + authToken
    },
    method: "GET",
  }
  )
  const deletePlace = async (e,id) =>{
    e.preventDefault();
    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
          headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + authToken
          },
          method: "DELETE",
      })

      const resposta = await data.json();
          console.log(resposta);
          if (resposta.success === true) {
              reRender();
              console.log("Place eliminat correctament");
          }else{
              setMissatge(error);
          }

    }catch {
      console.log(data);
      alert("Estem tenint problemes amb la xarxa o amb l'informació a les rutes");
    }
  }
  
  return (
    <>
         {loading ? "Espera..." : <>{data.map((place) => {
            return (
              <>
                { place.visibility.id == 1 || place.author.email == usuari ? (<PlaceGrid  deletePlace={ deletePlace } key={place.id} place={place}/>) : <></> }            
              </>
            )
          })}</>}
    </>
  )
}
