import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { ImEye } from 'react-icons/im';
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            <td className="iconofavourite">{place.favorites_count}</td>
            <td><Link className="headerLink" to={"/places/" +place.id}><ImEye className='icono'/></Link></td>
            <td><Link className="headerLink" to={"/places/edit/" +place.id}><BiEdit className='icono'/></Link></td> 
            <td><FaTrashAlt className='icono'/></td> 
        </>
    )
}
