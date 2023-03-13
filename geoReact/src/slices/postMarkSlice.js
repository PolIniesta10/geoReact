import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marks: JSON.parse(localStorage.getItem("postsMarks")) || [],
  isMarked: false
};
export const postMarksSlice = createSlice({
  name: 'marks',
  initialState,
  reducers: {
    addpostMark: (state, action) => {
      state.marks.push(action.payload); // aqui podem fer push
      state.isMarked=true;
      localStorage.setItem('postsMarks', JSON.stringify(state.marks));
    },
    delpostMark: (state, action) => {
      state.marks = state.marks.filter(mark => mark.id !== action.payload);
      localStorage.setItem('postsMarks', JSON.stringify(state.marks));
    },
    ismarked: (state,action) => {
      state.isMarked = false
      
      state.marks.map((mark) => {
          if (mark.postId == action.payload){
              state.isMarked = true;
              console.log(state.isMarked);
          }  
      })
    }
  }
});

export const { addpostMark, delpostMark, ismarked } = postMarksSlice.actions;
export default postMarksSlice.reducer;