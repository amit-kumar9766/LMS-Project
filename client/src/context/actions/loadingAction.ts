import * as ACTION_TYPES from "../actions/actionTypes";

export const loadingAction=(payload:boolean)=>{
  return {
    type: ACTION_TYPES.LOADING,
    payload:payload
  }
}
