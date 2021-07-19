import * as ACTION_TYPES from "../actions/actionTypes";

export const registerAction=(payload:any)=>{
  return {
    type: ACTION_TYPES.REGISTER,
    payload:payload
  }
}

export const loginAction = (payload:any) => {
  return {
    type: ACTION_TYPES.LOGIN,
    payload:payload
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};
