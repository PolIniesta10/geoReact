import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from "../userContext";
import { AiOutlineUnlock } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import { RiContactsBook2Line } from 'react-icons/ri';

export default function PlaceAdd(){
  let [formulari, setFormulari] = useState({});
  let { authToken,setAuthToken } = useContext(UserContext);

  const handleFormulari = (e) => {
    e.preventDefault();
    if (e.target.name==="upload")
      {
        console.log(e.target.files[0].name)
        setFormulari({
          ...formulari,
          [e.target.name] : e.target.files[0] 


        })
      }
    else {
          setFormulari({
            ...formulari,
            [e.target.name] : e.target.value

          })
      };
  }
  const addPlace = async(e) => {
    e.preventDefault();
    let {name,description,upload,latitude,longitude,visibility}=formulari;
    console.log(formulari);
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("upload", upload);
    formdata.append("latitude", latitude);
    formdata.append("longitude", longitude);
    formdata.append("visibility", visibility);

    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places", {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + authToken
        },
        method: "POST",
        body: formdata

      })
      const resposta = await data.json();
      if (resposta.success === true){
        console.log(resposta);
        setMissatgeOK("Place creat amb exit!!");
      } 

      else{
        console.log(formulari)
        setMissatge(resposta.message);
      } 
        
    }catch{
      console.log("Error");
      alert("catch");
    }
    formaddplace.reset(); 
  }
  useEffect(() => {
    addPlace();
    navigator.geolocation.getCurrentPosition( (pos )=> {

      setFormulari({
  
  
        ...formulari,
        latitude :  pos.coords.latitude,
        longitude: pos.coords.longitude
    
      })
      
      console.log("Latitude is :", pos.coords.latitude);
      console.log("Longitude is :", pos.coords.longitude);
    });

  }, [])
  return (
    <>
      <div className="container_add">
        <div className="add-box">
          <div className="left_add"></div>
          <div className="right_add">
            <h2 className='h2_add'>Places Add</h2>
            <form id='formaddplace'>
              <input type="text" className='field_add' placeholder="Name" id='name' onChange={handleFormulari}/>
              <input type="text" className='field_add' placeholder="Description" id='description' onChange={handleFormulari}/>
              <input type="text" className='field_add' placeholder="Latitude" id='latitude' onChange={handleFormulari}/> 
              <input type="text" className='field_add' placeholder="longitude" id='longitude' onChange={handleFormulari}/>
              
             
              <select value= {formulari.visibility } onChange={handleFormulari} id="visibility" name="visibility"  className='field_add'>
                <option  value="1" checked >Public</option>
                <option  value="3">Private</option>
                <option  value="2">Contacts</option>
              </select>
              <input type="file" className='file_add' id='upload' onChange={handleFormulari}/>
              <button className="btn_add">Create</button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}