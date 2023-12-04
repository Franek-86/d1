import React, { useContext, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "HANDLE_SEARCH":
      return { ...state, query: action.payload, page: 0 };

    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};

const AppContext = React.createContext();
const initialState = {
  isLoading: false,
  gate1: false,
  gate2: false,
  door: false,
  lockerCharger: false,
  general: false,
  unknown1: false,
  unknown2: false,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
// make sure use
export const useGlobalAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
