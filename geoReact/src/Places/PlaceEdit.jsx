import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from "../userContext";

export default function PlaceEdit(){
  const { id } = useParams();
  let [formulari, setFormulari] = useState({upload:""});
  let { authToken, setAuthToken } = useContext(UserContext);
  let [place, setPlace] = useState({});
    
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

  const getPlace = async(e) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "GET"
      })
      const resposta = await data.json();
      if (resposta.success === true) setFormulari({
                                      name : resposta.data.name,
                                      description : resposta.data.description,
                                      upload : resposta.data.file,
                                      latitude : resposta.data.latitude,
                                      longitude : resposta.data.longitude,
                                      visibility : resposta.data.visibility.id
                                })
        , console.log(resposta);
      
      else alert("La resposta no a triomfat");

      }catch{
        console.log("Error");
        alert("catch");  
      }
      
  }
  useEffect(() => { getPlace() }, []);
  
  const editPlace = async(e) => {
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
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
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
        alert("Place editado");
      } 

      else{
        console.log(resposta)
        const errores = document.getElementsByClassName("errores")[0];
        errores.innerHTML = resposta.message
        errores.removeAttribute("hidden")
      } 
        
    }catch{
      console.log("Error");
      alert("catch");
    }
  };

  return (
    <>
    <div className="container_add">
        <div className="add-box">
          
          <div className="right_add">
            <h2 className='h2_add'>Editing Place {id}</h2>
            <form id='formaddplace'>
              <input type="text" className='field_add' id="name" name="name" defaultValue={formulari.name} onChange={handleFormulari}/>
              <input type="text" className='field_add' placeholder="Description" id="description" name="description" defaultValue={formulari.description} onChange={handleFormulari}/>
              <input type="text" className='field_add' placeholder="Latitude" id="latitude" name="latitude"  defaultValue={formulari.latitude} onChange={handleFormulari}/> 
              <input type="text" className='field_add' placeholder="Longitude" id="longitude" name="longitude"  defaultValue={formulari.longitude} onChange={handleFormulari}/>
              
             
              <select onChange={handleFormulari} id="visibility" name="visibility" defaultValue={formulari.visibility}  className='field_add'>
                <option  value="1" checked >Public</option>
                <option  value="3">Private</option>
                <option  value="2">Contacts</option>
              </select>
              <div className="upload-btn-wrapper">
                <button className="btn">Change file</button>
                <input type="file" id="upload" name="upload" onChange={handleFormulari} />
              </div> 
              <div className="erroresPost-Places" hidden></div> 
              <button className="btn_add" onClick={(e) => { editPlace(e); }}>Edit</button>
            </form>
          </div>
          <div className="left_edit_post">
          <img src={"https://backend.insjoaquimmir.cat/storage/" + formulari.upload.filepath} alt={formulari.name}/> 
          </div>
        </div>
      </div>
      </>
  )
}