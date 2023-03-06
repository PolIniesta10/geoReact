import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { PlaceList } from './PlaceList';
import useFetch from "../hooks/useFetch";

export const PlacesList = () => {

  // desa el retorn de dades de l'api places
  let [ places, setPlaces ] = useState([]);
  // Ho utilitzem per provar un refresc quan esborrem un element
  let [refresh,setRefresh] = useState(false)
  // Dades del context. Ens cal el token per poder fer les crides a l'api
  let { usuari,  setUsuari,authToken,setAuthToken } = useContext(UserContext)

  const { data, error, loading} = useFetch("https://backend.insjoaquimmir.cat/api/places", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + authToken,
    },
    method: "GET",
  })

const deletePlace = (id,e) => {


  let confirma = confirm("Estas  segur?")

  if (confirma)
  {
    fetch ("https://backend.insjoaquimmir.cat/api/places/"+id,{
    
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        method: "DELETE",
       
    }
    ).then( data => data.json() )
    .then (resposta => { 
        
            console.log(resposta); 
            if (resposta.success == true )
            {
                console.log("OK")
                // provoca el refrescat del component i la reexecució de useEffect
                setRefresh(!refresh);

                // let b = places.filter( e =>  {
                //   return e.id !== id
                // });
                // setPlaces(b)
                
            }
        } ) 
  }
}

  return (
    <>
    <div className='bodyList'>
      <table id='tableList'>
        <tbody>
          <tr id='tr1List'>
            <th>Id</th>
            <th>Name</th>
            <th>Author</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Reviews</th>
            <th>Visibility</th>
            <th>Favorites</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>      
          {loading ? "Espera..." : <>{data.map((place) => {
            return (
              <>
                { place.visibility.id == 1 || place.author.email == usuari ? (<tr id='tr2List'><PlaceList  deletePlace={ deletePlace } key={place.id} place={place}/></tr>) : <></> }            
              </>
            )
          })}</>}

        </tbody>
      </table>
    </div>
    </>
  )
}