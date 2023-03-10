import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../userContext";
import { CommentsContext } from "./commentsContext";
import { useForm } from '../../hooks/useForm';


export const CommentAdd = ({ id }) => {
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext);

  let { setAdd, setRefresca, commentsCount, setCommentsCount } = useContext(CommentsContext);

  const { formState, onInputChange, onResetForm } = useForm({
    comment : "",
    });
    
const {comment} = formState

  const addComment = async () => {
    let data = await fetch(
      "https://backend.insjoaquimmir.cat/api/posts/" + id + "/comments",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //'Content-type': 'multipart/form-data',
          Authorization: "Bearer " + authToken,
        },
        method: "POST",
        // body: JSON.stringify({ name,description,upload,latitude,longitude,visibility })
        body: JSON.stringify(formState),
      }
    );
    let resposta = await data.json();
    console.log(resposta);
    if (resposta.success == true) {
      console.log("Todo bien");
      setRefresca(true);
      setCommentsCount(commentsCount + 1);
    } else {
      console.log("S'ha produit un error");
    }
  };
  return (
    <>
      <div className="flex mx-auto items-center justify-center  mt-6 mx-8 mb-4 max-w-lg">
        <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Afegeix un nou comentari
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                onChange={onInputChange}
                value={comment}
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="comment"
                placeholder="Escriu el teu comentari"
                required
              ></textarea>
            </div>
            <div className="w-full md:w-full flex items-start md:w-full px-3">
              <div className="-mr-1">
                <input
                  onClick={addComment}
                  type="button"
                  className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  value="Post Review"
                />
                <input  onClick={ onResetForm } type='button' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='RESET'/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};