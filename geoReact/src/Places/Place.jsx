import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { useParams } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';
import { FaRegShareSquare } from 'react-icons/fa';
import { BiSave } from 'react-icons/bi';

export default function Place(){
  const { id } = useParams();
  let { authToken, setAuthToken } = useContext(UserContext);
  const {usuari} = useCallback(UserContext)
  let [place, setPlace] = useState({
    author:{name:""},
    name:"",
    description:"",
    latitude:"",
    longitude:"",
    favorites_count:"",
    visibility:"",
    reviews_count:"",
    file:{filepath:""},
    created_at:""

  });

  const getPlace = async (e) => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
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
              setPlace(resposta.data)
          }else{
             console.log(resposta.message);
          }
    }
    catch {
      console.log(data);
      alert("Catch!");
    }
  }
  useEffect(() => { getPlace(); }, []);
  return (
    <>
      <div className="containerShow">
        <div className="grid">
          <div className="infoTopGrid">

            <div className="nameGrid">
              <h2>{place.author.name}</h2>
            </div>

            <div className="detallesGrid">
              <p>Latitude: {place.latitude}</p>
              <p>Longitude: {place.longitude}</p>
            </div>
            
          </div>

          <div className="gridImg">
            <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name}/>
          </div>

          <div className='infoBottomGrid'>
            <div className="iconosGrid">
              <div className="iconosGridIzq">

                <div className="fav_likeGrid">
                  <button className='buttonicon'><FaRegStar className='icGrid'/></button><p>{place.favorites_count}</p>
                </div>

                <div className="fav_likeGrid">
                  <button className='buttonicon'><MdOutlineReviews className='icGrid'/></button><p>{place.reviews_count}</p>
                </div>

                <button className='buttonicon'><FaRegShareSquare className='icGrid'/></button>
              </div>

              <div className="iconosGridDer">
                <button className='buttonicon'><BiSave className='icGrid'/></button>
              </div>

            </div>

            <p className='description_bodyGrid'>{place.name}</p>
            <p className='description_bodyGrid'>{place.description}</p>
            <p className='created_atGrid'>Created at: {place.created_at}</p>
          
          </div>
        </div>
      </div>
    </>
  )
}