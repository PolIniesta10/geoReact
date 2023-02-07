import React, { useCallback, useContext } from 'react'
import { UserContext } from '../userContext'
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';
import { FaRegShareSquare } from 'react-icons/fa';
import { BiSave } from 'react-icons/bi';
import { ImEye } from 'react-icons/im';
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const PlaceGrid = ({place, deletePlace,refresh, setRefresh}) => {
    let { userEmail, setUserEmail } = useContext(UserContext);
  
  return (
    <div className="grid">
      <div className="infoTopGrid">
        <div className="nameGrid">
          <h2>{place.author.name}</h2>
        </div>
        <div className="detallesGrid">
          <p>Latitude: {place.latitude}</p>
          <p>Longitude: {place.longitude}</p>
          
        </div>
        
      </div>
      <div className="gridImg">
          <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name}/>

      </div>
      <div className='infoBottomGrid'>
        <div className="iconosGrid">
          <div className="iconosGridIzq">

            <div className="fav_likeGrid">
              <button className='buttonicon'><FaRegStar className='icGrid'/></button><p>{place.favorites_count}</p>
            </div>

            <div className="fav_likeGrid">
              <button className='buttonicon'><MdOutlineReviews className='icGrid'/></button><p>{place.reviews_count}</p>
            </div>
            
            <button className='buttonicon'><FaRegShareSquare className='icGrid'/></button>

            <div className='authorButtons'>
              <Link className="headerlink" to={"/places/" +place.id}><ImEye className='authorIcons'/></Link>
              
              {(userEmail == place.author.email) ?

                <td><Link className="headerLink" to={"/places/edit/" +place.id}><BiEdit className='authorIcons'/></Link></td> 
                    :
                <td></td>
              }

              {(userEmail == place.author.email) ?

                <td><FaTrashAlt className='authorIcons' onClick={() => {deletePlace(place.id), setRefresh(!refresh);}}/></td>
                    : 
                <td></td>
              }

            </div>

          </div>

          <div className="iconosGridDer">
            <button className='buttonicon'><BiSave className='icGrid'/></button>
          </div>

        </div>
        <p className='description_bodyGrid'>{place.name}</p>
        <p className='description_bodyGrid'>{place.description}</p>
        <p className='created_atGrid'>Created at: {place.created_at}</p>
       
        
        
      </div>
    </div>
    
  )
}
