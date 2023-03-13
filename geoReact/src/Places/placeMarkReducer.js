export const placeMarkReducer = (initialState, action) => {
  switch (action.type) {

    case "Add Mark":
    
        console.log("Mark place" + action.payload )

        return [ ...initialState, action.payload]

    case "Del Mark":
    
        console.log("Delete mark" + action.payload )
    
        return initialState.filter( place => place.id !== action.payload)
            
    default:
    
    return [...initialState]
    
  }
};