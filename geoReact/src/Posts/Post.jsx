import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { BsShare } from 'react-icons/bs';
import { BiSave } from 'react-icons/bi';

export default function Post(){
  const { id } = useParams();
  let { authToken, setAuthToken } = useContext(UserContext);
  const {usuari} = useCallback(UserContext)
  let [post, setPost] = useState({
    author:{name:""},
    body:"",
    latitude:"",
    longitude:"",
    likes_count:"",
    visibility:"",
    comments_count:"",
    file:{filepath:""}

  });
  
  const getPost = async (e) => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/" + id, {
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
              setPost(resposta.data)
          }else{
             console.log(resposta.message);
          }
    }
    catch {
      console.log(data);
      alert("Catch!");
    }
  }
  useEffect(() => { getPost(); }, []);
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