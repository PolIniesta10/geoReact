import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useForm } from '../hooks/useForm';


export const ToDoAdd = ({handleNewToDo}) => {
  const { formState, onInputChange, onResetForm  } = useForm({
    id: 0,
    text: "",
    done : false,
    });
    const {id,text, done} = formState;
    console.log(formState);
  return (
    <>
      <input name="text" type="text" value={text} placeholder="ToDo"  onChange={ onInputChange }
          className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
      <button onClick={ (e) => { handleNewToDo(formState), onResetForm() }}
        className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
        SEND
      </button>
    </>
    
  )
}