import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../../userContext";
import { Review } from './Review';

export const ReviewsList = ({id}) => {
    let { userEmail, setUserEmail,authToken, setAuthToken } = useContext(UserContext);
    let [reviews, setReviews] = useState([]);
    let [canAddReview, setCanAddReview] = useState(true);
    let [addReview, setAddReview] = useState(true);
    let [review, setReview] = useState("");

    const getReviews = async() => {
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
          if (resposta.success === true) setReviews(resposta.data) ,console.log(resposta);
          
          else alert("La resposta no a triomfat");   
      
    }catch{
        console.log("Error");
        alert("catch");  
      }
    }
    useEffect(() => { getReviews(); }, []); 

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
            
              
            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Review</th>
                    <th>Author</th>
                    <th>delete</th>

                </tr>

                { reviews.map ( (review)=> (
                    <tr key={review.id}>
                        {(userEmail == review.user.email && canAddReview == true) && setCanAddReview(false)}
                        <Review review={review} deleteReview={deleteReview} />
                    </tr>
                ))}

                </tbody>
            </table>
           
          
          {//Si no tiene ninguna review
          (canAddReview == true) ?
            
            //Si no a pulsado el boton
            (addReview == true && canAddReview == true) ? 
                  <button onClick={() => {setAddReview(false);}}>
                    Add Review
                  </button>
                
                //Cuando a pulsado el boton
                : <form>
                  <input type="text" placeholder="Review" id='review' onChange={(e) => {setReview(e.target.value);}}/>
                  
                  <button onClick={(e) => {sendReview(e), setCanAddReview(false)}}>
                    Send Review
                  </button>
                </form> 
                : <div></div>
    
        }
        </>
      )








}
