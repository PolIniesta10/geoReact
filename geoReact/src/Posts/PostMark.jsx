import React from 'react'
import { useDispatch } from 'react-redux';
import { delpostMark } from '../slices/postMarkSlice';

export const PostMark = ({mark/*,handleDeleteMark*/}) => {
    const dispatch = useDispatch();
  return (
      <>
      <div className="todo">
        <div className='todoText'><strong>Body: </strong>{mark.body} || <strong>Ruta: </strong><a href={mark.ruta} className='todoLink'>{mark.ruta}</a></div>
        <div className="botonesTodo">
            <button onClick={(e) => {e.preventDefault(); dispatch(delpostMark(mark.id));}}>ESBORRAR</button>
        </div>
        
      </div>
        

      </>
    
  )
}