import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsMarks: JSON.parse(localStorage.getItem("postsMarks")) || []
};
export const postMarksSlice = createSlice({
  name: "postsMarks",
  initialState,
  reducers: {
    addpostMark: (state, action) => {
      state.postsMarks.push(action.payload); // aqui podem fer push
    },
    delpostMark: (state, action) => {
      state.postsMarks = state.postsMarks.filter((postMark) => postMark.id !== action.payload);
    },
    togglepostMark: (state, action) => {
      state.postsMarks = state.postsMarks.map((postMark) => {
        if (postMark.id === action.payload) {
          //id
          return { ...postMark, done: !postMark.done }; // invertim el done
        }
        return postMark;
      });
    }
  }
});

export const { addpostMark, delpostMark, togglepostMark } = postMarksSlice.actions;
export default postMarksSlice.reducer;