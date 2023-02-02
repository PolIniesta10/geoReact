import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { useParams } from 'react-router-dom';

export default function Post(){
  const { id } = useParams();
  let { authToken, setAuthToken } = useContext(UserContext);
  const {usuari} = useCallback(UserContext)
  let [post, setPost] = useState([]);
  
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
   <div>
     
     <p>{post.latitude}hola</p>
     <p>{post.longitude}</p>
     <p>{post.body}</p>
     <p>{post.likes_count}</p>
     <p>{post.comments_count}</p>
     <p>{post.visibility}</p>
     
   
   </div>
  )
}