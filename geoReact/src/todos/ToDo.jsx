import React from 'react'

export const ToDo = ({key,todo,handleDelete,handleToggleTodo}) => {
    console.log({todo})
  return (
      <>
      <div className="todo">
        <div className='todoText'>{todo.text}</div>
        <div className="botonesTodo">
            {(todo.done) ? <button onClick={ (e) => {handleToggleTodo(todo.id)}} className='buttonDoneToDo'>ToDO </button>:
            <button onClick={ (e) => {handleToggleTodo(todo.id)}} className='buttonDoneToDo'> Done</button>
            }
            <button onClick={ (e) => {handleDelete(todo.id)}} className='buttonDoneToDo'> DELETE</button>
        </div>
        
      </div>
        

      </>
    
  )
}