import React, { useCallback, useContext } from 'react'
import { UserContext } from '../userContext'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { BsShare } from 'react-icons/bs';
import { BiSave } from 'react-icons/bi';

import { Link } from 'react-router-dom'

export const PostGrid = ({post}) => {
  let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)
  
  
  return (
    <div className="grid">
      <div className="infoTopGrid">
        <div className="nameGrid">
          <h2>{post.author.name}</h2>

        </div>
        <div className="detallesGrid">
          <p>Latitude: {post.latitude}</p>
          <p>Longitude: {post.longitude}</p>
          
        </div>
        
      </div>
      <div className="gridImg">
      <img src={"https://backend.insjoaquimmir.cat/storage/" + post.file.filepath} alt={post.name}/>

      </div>
      <div className='infoBottomGrid'>
        <div className="iconosGrid">
          <div className="iconosGridIzq">
            <div className="fav_likeGrid">
              <button className='buttonicon'><AiOutlineHeart className='icGrid'/></button><p>{post.likes_count}</p>

            </div>
              
            <button className='buttonicon'><FaRegComments className='icGrid'/></button>
            <button className='buttonicon'><BsShare className='icGrid'/></button>
          </div>
          <div className="iconosGridDer">
            <button className='buttonicon'><BiSave className='icGrid'/></button>
          </div>
        </div>
        <p className='description_bodyGrid'>{post.body}</p>
        <p className='reviews_commentsGrid'>Comments: {post.comments_count}</p>
        <p className='created_atGrid'>{post.created_at}</p>
       
        
        
      </div>
    </div>
  )
}
