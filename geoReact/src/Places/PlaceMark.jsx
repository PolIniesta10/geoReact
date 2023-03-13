import React from 'react'
import { useDispatch } from 'react-redux';
import { delplaceMark } from '../slices/placeMarkSlice';

export const PlaceMark = ({mark/*,handleDeleteMark*/}) => {
    const dispatch = useDispatch();
  return (
      <>
      <div className="todo">
        <div className='todoText'><strong>Body: </strong>{mark.body} || <strong>Ruta: </strong><a href={mark.ruta} className='todoLink'>{mark.ruta}</a></div>
        <div className="botonesTodo">
            <button onClick={(e) => {e.preventDefault(); dispatch(delplaceMark(mark.id));}}>ESBORRAR</button>
        </div>
        
      </div>
        

      </>
    
  )
}