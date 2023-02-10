import React from 'react'
import { useContext } from "react";
import { UserContext } from "../../userContext";
import { FaTrashAlt } from 'react-icons/fa';
import { TbTrashOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export const Review = ({review, deleteReview}) => {
    let { userEmail, setUserEmail } = useContext(UserContext);
    return (
        <>
          <td>{review.id}</td>
          <td>{review.review}</td>
          <td>{review.user.name}</td>

      
          {(userEmail == review.user.email) ?<td><FaTrashAlt className='icono' onClick={() => {
                  deleteReview(review.id);
                }}/></td> 
                : <td><TbTrashOff className='icono NotYours'/></td> 
          }
        </> 
          
        )


          


}