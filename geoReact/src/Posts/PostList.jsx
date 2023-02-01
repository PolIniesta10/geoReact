import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';

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
            <td><i className="bi bi-eye"></i></td>

            {(usuari == post.author.name ) ?  
            <td><i className="bi bi-pencil-square"></i></td> : <td/>}

            {(usuari == post.author.name ) ?  
            <td><i className="bi bi-trash3"></i></td> : <td/>}
        </>
    )
}
