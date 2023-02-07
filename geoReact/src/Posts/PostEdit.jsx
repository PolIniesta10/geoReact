import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from "../userContext";

export default function PostEdit(){
  const { id } = useParams();
  let [formulari, setFormulari] = useState({upload:""});
  let { authToken, setAuthToken } = useContext(UserContext);
  let [post, setPost] = useState({});

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

  const getPost = async(e) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "GET"
      })
      const resposta = await data.json();
      if (resposta.success === true) setFormulari({
                                      body : resposta.data.body,
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
  useEffect(() => { getPost() }, []);
  
  const editPost = async(e) => {
    e.preventDefault();
    let {body,upload,latitude,longitude,visibility}=formulari;
    console.log(formulari);
    const formdata = new FormData();
    formdata.append("body", body);
    formdata.append("upload", upload);
    formdata.append("latitude", latitude);
    formdata.append("longitude", longitude);
    formdata.append("visibility", visibility);

    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/" + id, {
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
        alert("Post editado");
      } 

      else{
        console.log(resposta);
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
            <h2 className='h2_add'>Editing Post {id}</h2>
            <form id='formaddplace'>
              <textarea rows="3" className='textarea_add' placeholder="Body" id="body" name="body" defaultValue={formulari.body} onChange={handleFormulari}/>
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
              <button className="btn_add" onClick={(e) => { editPost(e); }}>Edit</button>
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