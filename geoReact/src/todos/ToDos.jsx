import React, { useContext } from "react";
import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToDo } from "./ToDo";
import { ToDoAdd } from "./ToDoAdd";
import { UserContext } from "../userContext";



export default function ToDos() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          {/* <ToDoAdd handle={handleNewToDo}/> */}
          <ToDoAdd />
          <div>
            {todos.length == 0 ? (
              <div>Vago! Treballa, afegeix alguna cosa a fer !!</div>
            ) : (
              <></>
            )}
            {todos.map((todo) => (
              // <ToDo key={todo.id} todo={ todo } handleDelete={handleDeleteToDo} handleToggleTodo={handleToggleTodo } />
              <ToDo key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};