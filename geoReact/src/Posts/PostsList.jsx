import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { PostList } from './PostList';
export default function PostsList(){

  let { authToken, setAuthToken } = useContext(UserContext);
  const {usuari} = useCallback(UserContext)
  let [posts, setPosts] = useState([]);

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
  useEffect(() => { getPosts(); }, []);
  return (
    <>
      <table id='tablePostList'>
        <tbody>
          <tr id='tr1PostList'>
            <th>Id</th>
            <th>Body</th>
            <th>Author</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Commentaris</th>
            <th>Visibility</th>
            <th>Likes</th>

          </tr>        
          {posts.map((post) => (
            <tr  key={posts.id} id='tr2PostList'>
              <PostList post={post} />
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}