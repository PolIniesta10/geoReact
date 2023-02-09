import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { PostList } from './PostList';
export default function PostsList(){

  let { userEmail, setUserEmail, authToken, setAuthToken } = useContext(UserContext);
  let [posts, setPosts] = useState([]);
  let [refresh,setRefresh] = useState(false)

  const getPosts = async (e) => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts", {
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
              setPosts(resposta.data)
          }else{
              setMissatge(resposta.message);
          }
    }
    catch {
      console.log(data);
      alert("Catch!");
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
        alert("Se ha eliminat correctament."),
        setRefresh(!refresh);
      
      else alert("La resposta no a triomfat");

    }catch{
      console.log("Error");
      alert("catch");  
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

            { posts.map ( (post)=> (
              (post.visibility.name != 'private' || userEmail == post.author.email) && (<tr key={post.id} id='tr2List'>
              <PostList post={post} deletePost={deletePost} setRefresh={setRefresh} refresh={refresh}/></tr>)
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}