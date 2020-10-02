// setup data layer
// we need this to track the basket

import  React, { createContext , useReducer , useContext } from "react";

// this is data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer , initialState , children}) => (
 <StateContext.Provider value={ useReducer(reducer , initialState) }>
  {children}
 </StateContext.Provider>   
)

// this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);