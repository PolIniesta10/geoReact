import React from 'react'


export const PostMark = ({post,handleDeleteMark}) => {
    console.log({post})
  return (
      <>
      <div className="todo">
        <div className='todoText'><strong>Body: </strong>{post.body} || <strong>Ruta: </strong>{post.ruta}</div>
        <div className="botonesTodo">
            <button onClick={(e) => {handleDeleteMark(post.id)}}>ESBORRAR</button>
        </div>
        
      </div>
        

      </>
    
  )
}