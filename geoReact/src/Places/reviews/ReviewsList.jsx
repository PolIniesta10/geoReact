import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../../userContext";
import { Review } from './Review';
import { BiMessageAdd } from 'react-icons/bi';
import { BiSend } from 'react-icons/bi';

export const ReviewsList = ({id}) => {
  let { userEmail, setUserEmail,authToken, setAuthToken } = useContext(UserContext);
  let [reviews, setReviews] = useState([]);
  let [canAddReview, setCanAddReview] = useState(true);
  let [addReview, setAddReview] = useState(true);
  let [review, setReview] = useState("");
  let [refresh,setRefresh] = useState(false)

  const saveReviews = async() => {
      try{  
          const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+ id +"/reviews", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Bearer '  + authToken,

          },
          method: "GET"
        })
        const resposta = await data.json();
        if (resposta.success === true) setReviews(resposta.data) ,console.log(resposta),setRefresh(!refresh);
        
        else alert("La resposta no a triomfat");   
    
  }catch{
      console.log("Error");
      alert("catch");  
    }
  }
  useEffect(() => { saveReviews(); }, [refresh]); 
  
  const deleteReview = async(idReview) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+ id + "/reviews/"+ idReview, {
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

  const sendReview = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("review", review);
    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+ id + "/reviews", {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + authToken,
        },
        method: "POST",
        body: formData
      });
      
      const resposta = await data.json();
      if (resposta.success === true)  alert("Review creada!");


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
              <th>Review</th>
              <th>Author</th>
              <th>Delete</th>

            </tr>

            { reviews.map ( (review)=> (
              <tr id='tr2List' key={review.id}>
                {(userEmail == review.user.email && canAddReview == true) && setCanAddReview(false)}
                <Review review={review} deleteReview={deleteReview} />
              </tr>
            ))}

            </tbody>
        </table>
      </div>
        
      
      {//Si no tiene ninguna review
      (canAddReview == true) ?
        
        //Si no a pulsado el boton
        (addReview == true && canAddReview == true) ? 
              <div className='addReview' > 
                <div className='addReviewButton' onClick={() => {setAddReview(false);}}><BiMessageAdd className='addReviewIcono'/><p>Add Review</p></div>
              </div>
            
              
            //Cuando a pulsado el boton
            : <form> 
                <div className='addReview'>

                    <input type="text" className='addReviewInput pad10' placeholder="Write review" id='review' onChange={(e) => {setReview(e.target.value);}}/>
              
                  <div className='addReviewButton pad10' onClick={(e) => {sendReview(e), setCanAddReview(false)}}><BiSend className='addReviewIcono'/></div>
                </div>
              </form> 

            : <div></div>

    }
    </>
  )








}
