import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { ImEye } from 'react-icons/im';
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';

export const PlaceList = ({place}) => {

    const {usuari} = useCallback(UserContext)
    return (
        <>
            <td>{place.id}</td>
            <td>{place.name}</td>
            <td>{place.author.name}</td>
            <td>{place.latitude}</td>
            <td>{place.longitude}</td>
            <td>{place.reviews_count}</td>
            <td>{place.visibility.name}</td>
            <td>
                <div className='iconofavourite'>
                    <AiOutlineLike className='icono3'/>{place.favorites_count}
                </div>
            </td>
            <td><ImEye className='icono'/></td>
            <td><BiEdit className='icono'/></td> 
            <td><FaTrashAlt className='icono'/></td> 
        </>
    )
}
