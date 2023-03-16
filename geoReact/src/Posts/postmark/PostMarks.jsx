import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
//import { placeMarksReducer } from "./placeMarksReducer";
import { PostMark } from "./PostMark";
//import { PlaceMarksAdd } from "./PlaceMarksAdd";
import { useDispatch, useSelector } from "react-redux";
import { delmark } from "../../slices/postMarkSlice";
import { PostMarksAdd } from "./PostMarksAdd";



// Estat inicial del reducer. Buit
const initialState = [];
const init = () => {
  // Si localstorage tornes null tornariem un array buit
  return JSON.parse(localStorage.getItem("postmarks")) || [];
};

export const PostMarks = () => {
  const { postMarks } = useSelector((state) => state.postMarks);
  const dispatch = useDispatch();

 


  useEffect(() => {
    localStorage.setItem("postmarks", JSON.stringify(postMarks));
  }, [postMarks]);

  
  const handleDeleteMark = (id) => {
    dispatch(delmark(id));
    // console.log("Aquí arribo " + id);
    // dispatchMarks({
    //   type: "DelMark",
    //   payload: id,
    // });
  };
  

  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          
          <div>
            {postMarks.length == 0 ? (
              <div className="bg-red-200 font-black grid place-content-center h-24">
                <div>Aquí no hi ha res a veure</div>
              </div>
            ) : (
              <></>
            )}
            {postMarks.map((mark) => (
              <PostMark
                key={mark.id}
                postMark={mark}
                handleDelete={handleDeleteMark}
              />
            ))}

            
          </div>
        </div>
      </div>
    </>
  );
};
