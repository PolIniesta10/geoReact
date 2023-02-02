import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { PlaceList } from './PlaceList';
export default function PlacesList(){

  let { authToken, setAuthToken } = useContext(UserContext);
  const {usuari} = useCallback(UserContext)
  let [places, setPlaces] = useState([]);

  const getPLaces = async (e) => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places", {
          headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + authToken
          },
          method: "GET",
      })
      const resposta = await data.json();
          console.log(resposta);
          if (resposta.success === true) {
              setPlaces(resposta.data)
          }else{
              setMissatge(resposta.message);
          }
    }
    catch {
      console.log(data);
      alert("Catch!");
    }
  }
  useEffect(() => { getPLaces(); }, []);
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
            {places.map((place) => (
              <tr  key={places.id} id='tr2List'>
                <PlaceList place={place} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}