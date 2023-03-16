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
import { ReviewsList } from './reviews/ReviewsList';
import { placeMarksReducer } from './placemark/placeMarkReducer';
import { useLocation } from "react-router-dom";
import { useForm } from '../hooks/useForm';

import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmark, ismarked } from "../slices/placeMarkSlice";

const initialState = [];

const init = () => {
  // Si localstorage tornes null tornariem un array buit
  return JSON.parse(localStorage.getItem("placemarks")) || [];
};

export default function Place(){

    // const [stateMarks, dispatchMarks] = useReducer(
    //   placeMarksReducer,
    //   initialState,
    //   init
    // );
  
  const { placeMarks,isMarked } = useSelector(state => state.placeMarks)
    // const { isMarked } = useSelector(state => state.isMarked)
  
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  console.log(pathname);

  const { id } = useParams();
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext);
  let [refresh,setRefresh] = useState(false)
  
  let [place, setPlace] = useState({
    author:{name:""},
    name:"",
    description:"",
    latitude:"",
    longitude:"",
    favorites_count:"",
    visibility:"",
    reviews_count:"",
    file:{filepath:""},
    created_at:""

  });

  const getPlace = async (e) => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
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
              setPlace(resposta.data)
          }else{
             console.log(resposta.message);
          }
    }
    catch {
      console.log(data);
      alert("Catch!");
    }
  }
 
  useEffect(() => { getPlace(); }, [refresh]);
  
  const anotaPlace = () => {
    //e.preventDefault()
    
    const dada = {
      id: place.id,
      name: place.name,
      description: place.description,
      ruta: pathname,
    };

    dispatch(addmark( dada))
    //setMarked(true)
    console.log(dada);
    alert("Has añadido este place a tus marcados!")

    // const action = { 
    //   type: "AddMark",
    //   payload: dada,
    // };
    //dispatchMarks(action);
    // executarem un note add
  };

  const test_mark = (id) =>{


    console.log(placeMarks.filter( placemark => placemark.id == id))

    if (placeMarks.filter( placemark => placemark.id == id).length > 0)
        return true
    else 
      return false 

  }
  
  useEffect(() => {
    //console.log("Aqui estoy");
    //console.log(stateMarks)
    dispatch(ismarked(id))
    localStorage.setItem("placemarks", JSON.stringify(placeMarks));

  }, [placeMarks]);
  
  const deletePlace = async(id) => {
    try{
      
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+ id, {
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
              <h2>{place.author.name}</h2>
            </div>

            <div className="detallesGrid">
              <p>Latitude: {place.latitude}</p>
              <p>Longitude: {place.longitude}</p>
            </div>
            
          </div>

          <div className="gridImg">
            <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name}/>
          </div>

          <div className='infoBottomGrid'>
            <div className="iconosGrid">
              <div className="iconosGridIzq">

                <div className="fav_likeGrid">
                  <button className='buttonicon'><AiOutlineHeart className='icGrid'/></button><p>{place.favorites_count}</p>
                </div>  

                <div className="fav_likeGrid">
                  <button className='buttonicon'><FaRegComments className='icGrid'/></button><p>{place.reviews_count}</p>
                </div>

                <button className='buttonicon'><FaRegShareSquare className='icGrid'/></button>

                <div className='authorButtons'>
                  
                  {(usuari == place.author.email) ?

                    <td><Link className="headerLink" to={"/places/edit/" +place.id}><BiEdit className='authorIcons'/></Link></td> 
                        :
                    <td></td>
                  }

                  {(usuari == place.author.email) ?

                    <td><Link className="headerLink" to={"/places/list/"}><FaTrashAlt className='authorIcons' onClick={() => {deletePlace(place.id), setRefresh(!refresh);}}/></Link></td>
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
                anotaPlace(e);
              }}>
                <FaSave className='icButtonSave'/>
              </button>
              }
                {/*<button className='buttonicon' /*onClick={ (e) => { markPlace(place) }}><FaSave className='icGrid'/></button>*/}
              </div>

            </div>

            <p className='description_bodyGrid'>{place.description}</p>
            <p className='created_atGrid'>Created at: {place.created_at}</p>
            <ReviewsList id={place.id}/>
          </div>
        </div>
      </div>
    </>
  )
}