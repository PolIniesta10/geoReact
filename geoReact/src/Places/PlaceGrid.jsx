import React, { useCallback, useContext } from 'react'
import { UserContext } from '../userContext'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { BsShare } from 'react-icons/bs';
import { BiSave } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';


import { Link } from 'react-router-dom'

export const PlaceGrid = ({place}) => {
  let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)
  
  
  return (
    <div className="grid">
      <div className="infoTopGrid">
        <div className="nameGrid">
          <h2>{place.author.name}</h2>
          <h3>{place.name}</h3>
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
              <button className='buttonicon'><AiOutlineLike className='icGrid'/></button><p>{place.favorites_count}</p>

            </div>
              
            <button className='buttonicon'><FaRegComments className='icGrid'/></button>
            <button className='buttonicon'><BsShare className='icGrid'/></button>
          </div>
          <div className="iconosGridDer">
            <button className='buttonicon'><BiSave className='icGrid'/></button>
          </div>
        </div>
        <p className='description_bodyGrid'>{place.description}</p>
        <p className='reviews_commentsGrid'>Reviews: {place.reviews_count}</p>
        <p className='created_atGrid'>{place.created_at}</p>
       
        
        
      </div>
    </div>
    
  )
}
