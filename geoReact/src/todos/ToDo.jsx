import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deltodo, toggletodo } from "../slices/todosSlice";

export const ToDo = ({todo/*,handleDelete,handleToggleTodo*/}) => {
  const dispatch = useDispatch();

  return (
      <>
      <div className="todo">
        <div className='todoText'>{todo.description}</div>
        <div className="botonesTodo">
            {(todo.done) ? /*<button onClick={ (e) => {handleToggleTodo(todo.id)}} className='buttonDoneToDo'>ToDO </button>:
            <button onClick={ (e) => {handleToggleTodo(todo.id)}} className='buttonDoneToDo'> Done</button>
            }
            <button onClick={ (e) => {handleDelete(todo.id)}} className='buttonDoneToDo'> DELETE</button>*/
            <button onClick={ (e) => dispatch(toggletodo(todo.id))} className='buttonDoneToDo'>Not Done</button> :
            <button onClick={ (e) => dispatch(toggletodo(todo.id))} className='buttonDoneToDo'>Done</button>}
            <button onClick={() => dispatch(deltodo(todo.id))} className="buttonDoneToDo">Remove</button>
        </div>
        
      </div>
        

      </>
    
  )
}