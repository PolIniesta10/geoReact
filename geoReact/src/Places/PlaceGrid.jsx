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
    <div className="placegrid">
      <div className="infoarribaplace">
        <div className="nameplace">
          <h2>{place.author.name}</h2>
          <h3>{place.name}</h3>
        </div>
        <div className="detallesplace">
          <p>Latitude: {place.latitude}</p>
          <p>Longitude: {place.longitude}</p>
          
        </div>
        
      </div>
      <div className="placeimg">
          <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name}/>

      </div>
      <div className='infoabajoplace'>
        <div className="iconosplace">
          <div className="iconosplaceizq">
            <div className="favoritesplace">
              <button className='buttonicon'><AiOutlineLike className='icplace'/></button><p>{place.favorites_count}</p>

            </div>
              
            <button className='buttonicon'><FaRegComments className='icplace'/></button>
            <button className='buttonicon'><BsShare className='icplace'/></button>
          </div>
          <div className="iconosplaceder">
            <button className='buttonicon'><BiSave className='icplace'/></button>
          </div>
        </div>
        <p className='descriptionplace'>{place.description}</p>
        <p className='reviewsplace'>Reviews: {place.reviews_count}</p>
        <p className='createdplace'>{place.created_at}</p>
       
        
        
      </div>
    </div>
    
  )
}
