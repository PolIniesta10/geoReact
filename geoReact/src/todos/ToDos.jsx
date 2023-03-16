import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { ToDo } from "./ToDo";
import { ToDoAdd } from "./ToDoAdd";
import { todosReducer } from "./todosReducer";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "../slices/todosSlice";

const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export default function ToDos() {
  // const [todos, dispatchTodos] = useReducer(todosReducer, initialState, init);
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const handleNewToDo = (todo) => {
  //  console.log("Añadiendo");
  //  console.log({ todo });
  //  todo.id = new Date().getTime();

  //  const action = {
  //    type: "Add Todo",
  //    payload: todo
  //  };
  //  dispatchTodos(action);
  //};

  //const handleDeleteToDo = (id) => {
  //  console.log("Elimino este " + id);
  //  dispatchTodos({
  //    type: "Del Todo",
  //    payload: id
  //  });
  //};

  //const handleToggleTodo = (id) => {
  //  dispatchTodos({
  //    type: "Toggle Todo",
  //    payload: id
  //  });
  //};

  // console.log(todos);

  return (
    <>
      <div className="cajaTodos">
          <table className="tableTodos">
            {todos.map((todo) => (
            <tr className="trTableTodos">

             <ToDo todo={todo} /*handleDelete={handleDeleteToDo} handleToggleTodo={handleToggleTodo}*/
             />
              </tr>
            ))}
          </table>
          <ToDoAdd /*handleNewToDo={handleNewToDo}*/ />
      </div>
    </>
  );
};