import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "../slices/todosSlice";


export const ToDoAdd = ({/*handleNewToDo*/}) => {
  const { description, onInputChange, onResetForm, formState  } = useForm({
    //id: 0,
    //text: "",
    //done : false,
    description: ""
    });
    //const {id,text, done} = formState;
    //console.log(formState);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
      event.preventDefault();
      if (description.length <= 1) return;
  
      const newTodo = {
        id: new Date().getTime(),
        description: description,
        done: false
      };
  
      onResetForm();
      //handle(newTodo)
      console.log("Abans del dispatch");
      dispatch(addtodo(newTodo));
    };
    
  return (
    <>
    <form onSubmit={onFormSubmit} className="flex mt-4">
      <input /*name="text"*/ name="description" /*value={text}*/ value={description} placeholder="ToDo"  onChange={ onInputChange }
          className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
      
      <input type="submit" /*onClick={ (e) => { handleNewToDo(formState), onResetForm() }}*/ value="Add" className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"></input>
      </form>
    </>
    
  )
}