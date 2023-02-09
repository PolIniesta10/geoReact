import React from 'react'
import { useContext } from "react";
import { UserContext } from "../../userContext";
import { FaTrashAlt } from 'react-icons/fa';

export const Review = ({review, deleteReview}) => {
    let { userEmail, setUserEmail } = useContext(UserContext);
    return (
        <>
          
      
          {(userEmail == review.user.email) ?<td><FaTrashAlt className='icono' onClick={() => {
                  deleteReview(review.id);
                }}/></td>
                : <p></p>
          }
        </>
          
        )





}