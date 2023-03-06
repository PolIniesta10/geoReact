import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../userContext";
import { PostGrid } from './PostGrid'
import useFetch from '../hooks/useFetch';

export const PostsGrid = () => {
  // desa el retorn de dades de l'api places
  let [ posts, setPosts ] = useState([]);
  // Ho utilitzem per provar un refresc quan esborrem un element
  let [refresca,setRefresca] = useState(false)
  // Dades del context. Ens cal el token per poder fer les crides a l'api
  let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)

  let { data,error,loading,reRender} = useFetch("https://backend.insjoaquimmir.cat/api/posts",
  {
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + authToken
    },
    method: "GET",
  }
  )
  const deletePost = async (e,id) =>{
    e.preventDefault();
    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/" + id, {
          headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + authToken
          },
          method: "DELETE",
      })

      const resposta = await data.json();
          console.log(resposta);
          if (resposta.success === true) {
              reRender();
              console.log("Post eliminat correctament");
          }else{
              setMissatge(error);
          }

    }catch {
      console.log(data);
      alert("Estem tenint problemes amb la xarxa o amb l'informació a les rutes");
    }
  }
  
  return (
    <>
         {loading ? "Espera..." : <>{data.map((post) => {
            return (
              <>
                { post.visibility.id == 1 || post.author.email == usuari ? (<PostGrid  deletePost={ deletePost } key={post.id} post={post}/>) : <></> }            
              </>
            )
          })}</>}
    </>
  )
}


