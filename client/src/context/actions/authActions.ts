import * as ACTION_TYPES from "../actions/actionTypes";

export const login = (data: any) => {
  return {
    type: ACTION_TYPES.LOGIN,
    username: data.username,
    token: data.token,
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};
