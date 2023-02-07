import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegShareSquare } from 'react-icons/fa';
import { BiSave } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Post(){
  const { id } = useParams();
  let { userEmail, setUserEmail, authToken, setAuthToken } = useContext(UserContext);
  let [posts, setPosts] = useState([]);
  let [refresh,setRefresh] = useState(false)

  let [post, setPost] = useState({
    author:{name:""},
    body:"",
    latitude:"",
    longitude:"",
    likes_count:"",
    visibility:"",
    comments_count:"",
    file:{filepath:""},
    created_at:""

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
 
  useEffect(() => { getPost(); }, [refresh]);

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
      <div className="containerShow">
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
            <p className='created_atGrid'>Created at: {post.created_at}</p>
          
          </div>
        </div>
      </div>
    </>
  )
}