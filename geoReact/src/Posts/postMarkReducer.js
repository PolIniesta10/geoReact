export const postMarkReducer = (initialState, action) => {
  switch (action.type) {

    case "Add Mark":
    
        console.log("Mark post" + action.payload )

        return [ ...initialState, action.payload]

    case "Del Mark":
    
        console.log("Delete mark" + action.payload )
    
        return initialState.filter( post => post.id !== action.payload)
            
    default:
    
    return [...initialState]
    
  }
};