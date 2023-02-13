import React from 'react'
import { useContext } from "react";
import { UserContext } from "../../userContext";
import { FaTrashAlt } from 'react-icons/fa';
import { TbTrashOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export const Comment = ({comment, deleteComment}) => {
    let { userEmail, setUserEmail } = useContext(UserContext);
    return (
        <>
          <td>{comment.id}</td>
          <td>{comment.comment}</td>
          <td>{comment.user.name}</td>

      
          {(userEmail == comment.user.email) ?<td><FaTrashAlt className='icono' onClick={() => {
                  deleteComment(comment.id);
                }}/></td> 
                : <td><TbTrashOff className='icono NotYours'/></td> 
          }
        </> 
          
        )


          


}