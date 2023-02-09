import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { ImEye } from 'react-icons/im';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { TbEditOff } from 'react-icons/tb';
import { TbTrashOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export const PostList = ({post, deletePost,refresh, setRefresh}) => {
    let { userEmail, setUserEmail } = useContext(UserContext);

    return (
        <>
            <td>{post.id}</td>
            <td>{post.body}</td>
            <td>{post.author.name}</td>
            <td>{post.latitude}</td>
            <td>{post.longitude}</td>
            <td>{post.comments_count}</td>
            <td>{post.visibility.name}</td>
            <td><AiOutlineHeart className='icono'/>{post.likes_count}</td>
            <td><Link className="headerLink" to={"/posts/" +post.id}><ImEye className='icono'/></Link></td>

            {(userEmail == post.author.email) ?

                <td><Link className="headerLink" to={"/posts/edit/" +post.id}><BiEdit className='icono'/></Link></td> 
                    :
                <td><TbEditOff className='iconoNotYours'/></td>
            }

            {(userEmail == post.author.email) ?

                <td><FaTrashAlt className='icono' onClick={() => {deletePost(post.id), setRefresh(!refresh);}}/></td>
                    : 
                <td><TbTrashOff className='iconoNotYours'/></td>
            }
        </>
    )
}
