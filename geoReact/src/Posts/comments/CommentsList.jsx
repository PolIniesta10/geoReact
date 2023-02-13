import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../../userContext";
import { Comment } from './Comment';
import { BiMessageAdd } from 'react-icons/bi';
import { BiSend } from 'react-icons/bi';

export const CommentsList = ({id}) => {
  let { userEmail, setUserEmail,authToken, setAuthToken } = useContext(UserContext);
  let [comments, setComments] = useState([]);
  let [canAddComment, setCanAddComment] = useState(true);
  let [addComment, setAddComment] = useState(true);
  let [comment, setComment] = useState("");
  let [refresh,setRefresh] = useState(false)

  const saveComments = async() => {
      try{  
          const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/"+ id +"/comments", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Bearer '  + authToken,

          },
          method: "GET"
        })
        const resposta = await data.json();
        if (resposta.success === true) setComments(resposta.data) ,console.log(resposta),setRefresh(!refresh);
        
        else alert("La resposta no a triomfat");   
    
  }catch{
      console.log("Error");
      alert("catch");  
    }
  }
  useEffect(() => { saveComments(); }, [refresh]); 
  
  const deleteComment = async(idComment) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/"+ id + "/comments/"+ idComment, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "DELETE"
      })
      const resposta = await data.json();
      if (resposta.success === true) console.log(resposta);
      
      else alert("La resposta no a triomfat");

      }catch{
        console.log("Error");
        alert("catch");  
      }
      
  }

  const sendComment = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment", comment);
    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/"+ id + "/comments", {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + authToken,
        },
        method: "POST",
        body: formData
      });
      
      const resposta = await data.json();
      if (resposta.success === true)  alert("Comment creada!");


      else alert("La resposta no ha triomfat");


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
              <th>Comment</th>
              <th>Author</th>
              <th>Delete</th>

            </tr>

            { comments.map ( (comment)=> (
              <tr id='tr2List' key={comment.id}>
                {(userEmail == comment.user.email && canAddComment == true) && setCanAddComment(false)}
                <Comment comment={comment} deleteComment={deleteComment} />
              </tr>
            ))}

            </tbody>
        </table>
      </div>
        
      
      {//Si no tiene ninguna review
      (canAddComment== true) ?
        
        //Si no a pulsado el boton
        (addComment == true && canAddComment == true) ? 
              <div className='addReview' > 
                <div className='addReviewButton' onClick={() => {setAddComment(false);}}><BiMessageAdd className='addReviewIcono'/><p>Add Comment</p></div>
              </div>
            
              
            //Cuando a pulsado el boton
            : <form> 
                <div className='addReview'>

                    <input type="text" className='addReviewInput pad10' placeholder="Write review" id='review' onChange={(e) => {setComment(e.target.value);}}/>
              
                  <div className='addReviewButton pad10' onClick={(e) => {sendComment(e), setCanAddComment(false)}}><BiSend className='addReviewIcono'/></div>
                </div>
              </form> 

            : <div></div>

    }
    </>
  )








}
