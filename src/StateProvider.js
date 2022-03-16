import React, { createContext, useReducer, useContext } from "react";

// This is the DATA Layer
export const StateContext = createContext();

// Build A Provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Using it in a Component
export const useStateValue = () => useContext(StateContext);
