import React from 'react'
import { postMarkReducer } from './postMarkReducer';
import { PostMark } from "./PostMark";
import { useReducer } from "react";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
//const initialState = [];
//const init = () => {
  //return JSON.parse(localStorage.getItem("postsMarks")) || [];
//};

const PostMarks = () => {
    const {marks} = useSelector(state => state.postMarks)
    //const [localPostmark, setLocalPostmark] = useState(init);
    console.log(marks);
    useEffect ( ()=>{
      localStorage.setItem('postsMarks',JSON.stringify(marks))
  },[marks])
    console.log(marks);
    //const handleDeleteMark = (id) => {
        //console.log("AQui arribo " + id);
        //dispatchPosts({  
            //type: "Del Mark",
            //payload: id
        //});
        //console.log("mark borrado")
        //const updatedPostmark = postmark.filter(post => post.id !== id);
        //setPostmark(updatedPostmark);
        //localStorage.setItem("postsMarks", JSON.stringify(updatedPostmark));
    //};
    
    return (
        <>
        <div>
        <table className="tableTodos">
            {marks.map((mark) => (<tr className="trTableTodos" key={mark.id}>
              <PostMark
                mark={mark}
                key={mark.id}
                //handleDeleteMark={handleDeleteMark}
              /></tr>
            ))}
          </table>
        </div>
    
        </>
        
    )
}
export default PostMarks