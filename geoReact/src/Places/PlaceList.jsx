import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { FaRegStar } from 'react-icons/fa';
import { ImEye } from 'react-icons/im';
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { TbEditOff } from 'react-icons/tb';
import { TbTrashOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export const PlaceList = ({place, deletePlace,refresh, setRefresh}) => {
    let { usuari, setUsuari } = useContext(UserContext);

    return (
        <>
            <td>{place.id}</td>
            <td>{place.name}</td>
            <td>{place.author.name}</td>
            <td>{place.latitude}</td>
            <td>{place.longitude}</td>
            <td>{place.reviews_count}</td>
            <td>{place.visibility.name}</td>
            <td><FaRegStar className="icono iconoFav"/>{place.favorites_count}</td>
            <td><Link className="headerLink" to={"/places/" +place.id}><ImEye className='icono'/></Link></td>

            {(usuari == place.author.email) ?

                <td><Link className="headerLink" to={"/places/edit/" +place.id}><BiEdit className='icono'/></Link></td> 
                    :
                <td><TbEditOff className='icono NotYours'/></td>
            }

            {(usuari == place.author.email) ?
            
                <td><FaTrashAlt className='icono' onClick={() => {deletePlace(place.id), setRefresh(!refresh);}}/></td>
                    : 
                <td><TbTrashOff className='icono NotYours'/></td>
            }

        </>
    )
}
