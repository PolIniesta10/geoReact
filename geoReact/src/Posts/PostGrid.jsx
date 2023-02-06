import React, { useCallback, useContext } from 'react'
import { UserContext } from '../userContext'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { BsShare } from 'react-icons/bs';
import { BiSave } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';


import { Link } from 'react-router-dom'

export const PostGrid = ({post}) => {
  let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)
  
  
  return (
    <div className="placegrid">
      <div className="infoarribaplace">
        <div className="nameplace">
          <h2>{post.author.name}</h2>
        </div>
        <div className="detallesplace">
          <p>Latitude: {post.latitude}</p>
          <p>Longitude: {post.longitude}</p>
          
        </div>
        
      </div>
      <div className="placeimg">
          <img src={"https://backend.insjoaquimmir.cat/storage/" + post.file.filepath} alt={post.name}/>

      </div>
      <div className='infoabajoplace'>
        <div className="iconosplace">
          <div className="iconosplaceizq">
            <div className="favoritesplace">
              <button className='buttonicon'><AiOutlineLike className='icplace'/></button><p>{post.likes_count}</p>

            </div>
              
            <button className='buttonicon'><FaRegComments className='icplace'/></button>
            <button className='buttonicon'><BsShare className='icplace'/></button>
          </div>
          <div className="iconosplaceder">
            <button className='buttonicon'><BiSave className='icplace'/></button>
          </div>
        </div>
        <p className='descriptionplace'>{post.body}</p>
        <p className='reviewsplace'>Reviews: {post.comments_count}</p>
        <p className='createdplace'>{post.created_at}</p>
       
        
        
      </div>
    </div>
    
  )
}
