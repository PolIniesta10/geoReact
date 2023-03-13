import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marks: JSON.parse(localStorage.getItem("placesMarks")) || [],
  isMarked: false
};
export const placeMarksSlice = createSlice({
  name: 'marks',
  initialState,
  reducers: {
    addplaceMark: (state, action) => {
      state.marks.push(action.payload); // aqui podem fer push
      state.isMarked=true;
      localStorage.setItem('placesMarks', JSON.stringify(state.marks));
    },
    delplaceMark: (state, action) => {
      state.marks = state.marks.filter(mark => mark.id !== action.payload);
      localStorage.setItem('placesMarks', JSON.stringify(state.marks));
    },
    ismarked: (state,action) => {
      state.isMarked = false
      
      state.marks.map((mark) => {
          if (mark.placeId == action.payload){
              state.isMarked = true;
              console.log(state.isMarked);
          }  
      })
    }
  }
});

export const { addplaceMark, delplaceMark, ismarked } = placeMarksSlice.actions;
export default placeMarksSlice.reducer;