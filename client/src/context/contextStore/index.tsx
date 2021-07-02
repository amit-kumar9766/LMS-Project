import React, { useReducer, useContext } from "react";
import { auth } from "../reducers/auth";
import { authInitialState } from "../initialStates/authInitialState";

const contextStore = React.createContext({});

export const ContextProvider = (props: any) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);

  const value = { authState, authDispatch };
  return (
    <contextStore.Provider value={value}>
      {props.children}
    </contextStore.Provider>
  );
};

export const useStore = () => useContext(contextStore);
