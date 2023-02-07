import React, { useCallback, useContext } from 'react'
import { UserContext } from '../userContext'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { FaRegShareSquare } from 'react-icons/fa';
import { BiSave } from 'react-icons/bi';
import { ImEye } from 'react-icons/im';
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const PostGrid = ({post, deletePost,refresh, setRefresh}) => {
  let { userEmail, setUserEmail } = useContext(UserContext);
  
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

            <div className="fav_likeGrid">
              <button className='buttonicon'><FaRegComments className='icGrid'/></button><p>{post.comments_count}</p>
            </div>

            <button className='buttonicon'><FaRegShareSquare className='icGrid'/></button>

            <div className='authorButtons'>
              <Link className="headerlink" to={"/posts/" +post.id}><ImEye className='authorIcons'/></Link>

              {(userEmail == post.author.email) ?

                <td><Link className="headerLink" to={"/posts/edit/" +post.id}><BiEdit className='authorIcons'/></Link></td> 
                    :
                <td></td>
              }

              {(userEmail == post.author.email) ?

                <td><FaTrashAlt className='authorIcons' onClick={() => {deletePost(post.id), setRefresh(!refresh);}}/></td>
                    : 
                <td></td>
              }
            </div>

          </div>

          <div className="iconosGridDer">
            <button className='buttonicon'><BiSave className='icGrid'/></button>
          </div>
        </div>
        <p className='description_bodyGrid'>{post.body}</p>
        <p className='created_atGrid'>{post.created_at}</p>
       
        
        
      </div>
    </div>
  )
}
