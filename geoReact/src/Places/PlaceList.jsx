import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../userContext';
import { ImEye } from 'react-icons/im';

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
            <td><i class="bi bi-star-fill"></i>{place.favorites_count}</td>
            <td><ImEye /></td>

            {(usuari == place.author.name ) ?  
            <td><i className="bi bi-pencil-square"></i></td> : <td/>}

            {(usuari == place.author.name ) ?  
            <td><i className="bi bi-trash3"></i></td> : <td/>}
        </>
    )
}
