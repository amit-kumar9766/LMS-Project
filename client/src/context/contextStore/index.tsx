import React, { useReducer, useContext } from 'react'
import { auth } from '../reducers/auth'
import { loadingReducer } from '../reducers/loadingReducer'
import { authInitialState } from '../initialStates/authInitialState'

const loadingInitialState = {
  loading: false,
}

const contextStore = React.createContext({})

export const ContextProvider = (props: any) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState)
  const [loading, loadingDispatch] = useReducer(
    loadingReducer,
    loadingInitialState,
  )

  const value = { authState, authDispatch, loading, loadingDispatch }
  return (
    <contextStore.Provider value={value}>
      {props.children}
    </contextStore.Provider>
  )
}

export const useStore = () => useContext(contextStore)
