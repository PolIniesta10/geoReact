import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegShareSquare } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CommentsList } from './comments/CommentsList';
import { postMarkReducer } from './postMarkReducer';
import { useLocation } from "react-router-dom";
import { useForm } from '../hooks/useForm';

import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addpostMark, ismarked }  from "../slices/postMarkSlice";
//const initialState = [];
//const init = () => {
  //return JSON.parse(localStorage.getItem("postmark")) || [];
//};

export default function Post(){
  //const [postmark, dispatchPosts] = useReducer(postMarkReducer, initialState,init);
  const { marks, isMarked } = useSelector(state => state.postMarks);
  const { pathname } = useLocation();

  const { id } = useParams();
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext);
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
  
  

  const dispatch = useDispatch();

  /*const markPost = (post) => {
    console.log("Añadiendo");
    console.log({ post });
    const postmark = {
      id: new Date().getTime(),
      body: post.body,
      ruta: pathname
    };
    const action = {
      type: "Add Mark",
      payload: postmark
    };
    console.log(postmark);
    alert("Marcador añadido!");
    dispatchPosts(action);
  };*/
  const markPost = (post) =>{
    console.log(post);

    const AddMark = {
      id: new Date().getTime(),
      postId: post.id,
      body: post.body,
      ruta: pathname,

    }
    dispatch(addpostMark(AddMark));
    console.log(pathname);
    alert("Has añadido este post a tus marcados!")
  }
  
  useEffect(() => {
    dispatch(ismarked(id));
    localStorage.setItem('postsMarks', JSON.stringify(marks));
  }, [marks]);
  
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
                  
                  {(usuari == post.author.email) ?

                    <td><Link className="headerLink" to={"/posts/edit/" +post.id}><BiEdit className='authorIcons'/></Link></td> 
                        :
                    <td></td>
                  }

                  {(usuari == post.author.email) ?

                    <td><Link className="headerLink" to={"/posts/list/"}><FaTrashAlt className='authorIcons' onClick={() => {deletePost(post.id), setRefresh(!refresh);}}/></Link></td>
                        : 
                    <td></td>
                  }

                </div>
              </div>

              <div className="iconosGridDer">
              { isMarked ? 
              <button className='buttonicon'
              onClick={(e) => {
                e.preventDefault();
              }}>
                <FaSave className='icButtonSaved'/>
              </button>
              :
              <button className='buttonicon'
              onClick={(e) => {
                e.preventDefault();
                markPost(post);
              }}>
                <FaSave className='icButtonSave'/>
              </button>
              }
                {/*<button className='buttonicon' /*onClick={ (e) => { markPost(post) }}><FaSave className='icGrid'/></button>*/}
              </div>

            </div>

            <p className='description_bodyGrid'>{post.body}</p>
            <p className='created_atGrid'>Created at: {post.created_at}</p>
            <CommentsList id={post.id}/>
          </div>
        </div>
      </div>
    </>
  )
}