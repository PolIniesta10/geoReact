import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../userContext";
import { PostGrid } from './PostGrid'

export default function PostsGrid() {
  let { userEmail, setUserEmail, authToken, setAuthToken } = useContext(UserContext);
  let [posts, setPosts] = useState([]);
  let [refresh,setRefresh] = useState(false)

  const getPosts = async(e) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/posts", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "GET"
      })
      const resposta = await data.json();
      if (resposta.success === true) {
        setPosts(resposta.data);
        console.log(resposta);
      }
      
      else {
        console.log(resposta);
      }
      

      }catch{
        console.log("Error");
        alert("catch");  
      }
      
  }
  useEffect(() => { getPosts(); }, [refresh]);

  const deletePost = async(id) => {
    try{
      
      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/"+ id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "DELETE"
      })

      const resposta = await data.json();
      if (resposta.success === true)
        console.log(resposta),
        setRefresh(!refresh);
      
      else alert("La resposta no a triomfat");

    }catch{
      console.log("Error");
      alert("catch");  
    }
  }

  return (
    <>
          { posts.map ( (post)=> (
              (post.visibility.name != 'private' || userEmail == post.author.email) && (<div key={post.id} >
              <PostGrid post={post} deletePost={deletePost} setRefresh={setRefresh} refresh={refresh}/></div>)
          ))}

    </>
  )
}

