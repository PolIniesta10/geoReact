import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { PostList } from './PostList';
import useFetch from "../hooks/useFetch";

export const PostsList = () => {

  // desa el retorn de dades de l'api places
  let [ posts, setPosts ] = useState([]);
  // Ho utilitzem per provar un refresc quan esborrem un element
  let [refresh,setRefresh] = useState(false)
  // Dades del context. Ens cal el token per poder fer les crides a l'api
  let { usuari,  setUsuari,authToken,setAuthToken } = useContext(UserContext)

  const { data, error, loading} = useFetch("https://backend.insjoaquimmir.cat/api/posts", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + authToken,
    },
    method: "GET",
  })

const deletePost = (id) => {


  let confirma = confirm("Estas  segur?")

  if (confirma)
  {
    fetch ("https://backend.insjoaquimmir.cat/api/posts/"+id,{
    
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        method: "DELETE",
       
    }
    ).then( data => data.json() )
    .then (resposta => { 
        
            console.log(resposta); 
            if (resposta.success == true )
            {
                console.log("OK")
                // provoca el refrescat del component i la reexecució de useEffect
                setRefresh(!refresh);

                // let b = posts.filter( e =>  {
                //   return e.id !== id
                // });
                // setPosts(b)
                
            }
        } ) 
  }
}

  return (
    <>
    <div className='bodyList'>
      <table id='tableList'>
        <tbody>
          <tr id='tr1List'>
            <th>Id</th>
            <th>Body</th>
            <th>Author</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Commentaris</th>
            <th>Visibility</th>
            <th>Likes</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>      
          {loading ? <p className='esperant'>Espera...</p> : <>{data.map((post) => {
            return (
              <>
                { post.visibility.id == 1 || post.author.email == usuari ? (<tr id='tr2List'><PostList  deletePost={ deletePost } key={post.id} post={post} setRefresh={ setRefresh } refresh={refresh}/></tr>) : <></> }            
              </>
            )
          })}</>}
          
          </tbody>
          
        </table>
      </div>
    </>
  )
}