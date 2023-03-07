import React from 'react'


export const PlaceMark = ({place,handleDeleteMark}) => {
    console.log({place})
  return (
      <>
      <div className="todo">
        <div className='todoText'><strong>Body: </strong>{place.body} || <strong>Ruta: </strong><a href={place.ruta} className='todoLink'>{place.ruta}</a></div>
        <div className="botonesTodo">
            <button onClick={(e) => {handleDeleteMark(place.id)}}>ESBORRAR</button>
        </div>
        
      </div>
        

      </>
    
  )
}