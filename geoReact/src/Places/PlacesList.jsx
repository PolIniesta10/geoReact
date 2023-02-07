import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { PlaceList } from './PlaceList';
export default function PlacesList(){

  let { userEmail, setUserEmail, authToken, setAuthToken } = useContext(UserContext);
  let [places, setPlaces] = useState([]);
  let [refresh,setRefresh] = useState(false)

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
  useEffect(() => { getPLaces(); }, [refresh]);

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

          { places.map ( (place)=> (
              (place.visibility.name != 'private' || userEmail == place.author.email) && (<tr key={place.id} id='tr2List'>
              <PlaceList place={place} deletePlace={deletePlace} setRefresh={setRefresh} refresh={refresh}/></tr>)
          ))}

          </tbody>
        </table>
      </div>
    </>
  )
}