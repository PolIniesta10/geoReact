// import { createSlice } from '@reduxjs/toolkit'

export const todosReducer = (initialState, action) => {
  switch (action.type) {
    case "Add Todo":
      return [...initialState, action.payload];
    
      case "Del Todo":
        // Retornarà un nou array amb tots els elements menys el de l'id
        return initialState.filter((todo) => todo.id !== action.payload);
  
      case "Toggle Todo":
        return initialState.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, done: !todo.done }; // invertim el done
          }
          return todo;
          });
      default:
          return [...initialState];
  }
};

 // const initialState = {
 //  value: 0,
// }

// export const counterSlice = createSlice({
 //  name: 'counter',
 //  initialState,
 //  reducers: {
  //   increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
   //    state.value += 1
   //  },
  //   decrement: (state) => {
    //   state.value -= 1
   //  },
   //  incrementByAmount: (state, action) => {
    //   state.value += action.payload
   //  },
 //  },
// })

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer