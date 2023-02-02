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
   <div>
     <div>
       {post.author.name}
     </div>
     <div>
       {post.body}
     </div>
     <div>
        {post.latitude}
      </div>
      <div>
        {post.longitude}
      </div>
        
     
      <div>
       {post.likes_count}
      </div>
      <div>
        {post.comments_count}
      </div>
      <div>
        {post.visibility}
      </div>
      

     
     
     
   
   </div>
  )
}