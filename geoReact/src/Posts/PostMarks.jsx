import React from 'react'
import { postMarkReducer } from './postMarkReducer';
import { PostMark } from "./PostMark";
import { useReducer } from "react";

const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("postmark")) || [];
};

const PostMarks = () => {
    const [postmark, dispatchPosts] = useReducer(postMarkReducer, initialState, init);

    const handleDeleteMark = (id) => {
        console.log("AQui arribo " + id);
        dispatchPosts({  
            type: "Del Mark",
            payload: id
        });
        console.log("mark borrado")
        const updatedPostmark = postmark.filter(post => post.id !== id);
        localStorage.setItem("postmark", JSON.stringify(updatedPostmark));
        
    };

    return (
        <>
        <div>
        <table className="tableTodos">
            {postmark.map((post) => (<tr className="trTableTodos">
              <PostMark
                key={post.id}
                post={post}
                handleDeleteMark={handleDeleteMark}
              /></tr>
            ))}
          </table>
        </div>
    
        </>
        
    )
}
export default PostMarks