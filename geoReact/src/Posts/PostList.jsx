import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { ImEye } from 'react-icons/im';
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const PostList = ({post}) => {

    const {usuari} = useCallback(UserContext)
    return (
        <>
            <td>{post.id}</td>
            <td>{post.body}</td>
            <td>{post.author.name}</td>
            <td>{post.latitude}</td>
            <td>{post.longitude}</td>
            <td>{post.comments_count}</td>
            <td>{post.visibility.name}</td>
            <td><i className="bi bi-star-fill"></i>{post.likes_count}</td>
            <td><Link className="headerLink" to={"/posts/" +post.id}><ImEye className='icono'/></Link></td>
            <td><Link className="headerLink" to={"/postsedit/" +post.id}><BiEdit className='icono'/></Link></td> 
            <td><FaTrashAlt className='icono'/></td>
        </>
    )
}
