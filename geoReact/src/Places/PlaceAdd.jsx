import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from "../userContext";


export default function PlaceAdd(){
  let [formulari, setFormulari] = useState({
    latitude:"",
    longitude:""
  });
  let { authToken,setAuthToken } = useContext(UserContext);
  useEffect(() => {

    navigator.geolocation.getCurrentPosition( (pos )=> {
      setFormulari({
        ...formulari,
        latitude :  pos.coords.latitude,
        longitude: pos.coords.longitude,
        visibility : 1
      })
  
    });
  }, [])

  const handleFormulari = (e) => {
    e.preventDefault();
    if (e.target.type && e.target.type==="file")
      {
        setFormulari({
          ...formulari,
          [e.target.name] : e.target.files[0] 
        })
      } else {
        setFormulari({
          ...formulari,
          [e.target.name] : e.target.value
      })
    }
  };

  const addPlace = async(e) => {
    e.preventDefault();
    let {name,description,upload,latitude,longitude,visibility}=formulari;
    console.log(formulari);
    const formdata = new FormData();
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
        formaddplace.reset();
        alert("Place enviado");
      } 

      else{
        console.log(formulari)
        const errores = document.getElementsByClassName("errores")[0];
        errores.innerHTML = resposta.message
        errores.removeAttribute("hidden")
      } 
        
    }catch{
      console.log("Error");
      alert("catch");
    }
  }
  return (
    <>
      <div className="container_add">
        <div className="add-box">
          <div className="left_add"></div>
          <div className="right_add">
            <h2 className='h2_add'>Places Add</h2>
            <form id='formaddplace'>
              <input type="text" className='field_add' placeholder="Name" id="name" name="name" onChange={handleFormulari}/>
              <input type="text" className='field_add' placeholder="Description" id="description" name="description" onChange={handleFormulari}/>
              <input type="text" className='field_add' placeholder="Latitude" id="latitude" name="latitude" value={formulari.latitude} onChange={handleFormulari}/> 
              <input type="text" className='field_add' placeholder="Longitude" id="longitude" name="longitude" value={formulari.longitude} onChange={handleFormulari}/>
              
             
              <select value= {formulari.visibility } onChange={handleFormulari} id="visibility" name="visibility"  className='field_add'>
                <option  value="1" checked >Public</option>
                <option  value="3">Private</option>
                <option  value="2">Contacts</option>
              </select>
              <div className="upload-btn-wrapper">
                <button className="btn">Upload a file</button>
                <input type="file" id="upload" name="upload" onChange={handleFormulari} />
              </div>
              <div className="erroresPost-Places" hidden></div>
              <button className="btn_add" onClick={(e) => { addPlace(e); }}>Create</button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}