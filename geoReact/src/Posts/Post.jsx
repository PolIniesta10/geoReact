import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { useParams } from 'react-router-dom';

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
    <>
      <div className='cardContainer'>
        <div className='cardShow'>
          <div className='cardImage'>
            <img src={"https://backend.insjoaquimmir.cat/storage/" + post.file.filepath} alt={post.name}/>  
          </div>
          <div className='cardElements'>
            <p>Author: {post.author.name}</p>
          </div>
          <div className='cardElements'>
            <p>Body: {post.body}</p>
          </div>
          <div className='cardElements'>
            <p>Latitude: {post.latitude}</p>
          </div>
          <div className='cardElements'>
            <p>Longitude: {post.longitude}</p>
          </div>
          <div className='cardElements'>
            <p>Likes: {post.likes_count}</p>
          </div>
          <div className='cardElements'>
            <p>Comments: {post.comments_count}</p>
          </div>
          <div className='cardElements'>
            <p>Visibility: {post.visibility.name}</p>
          </div>
        </div>
      </div>
    </>
  )
}