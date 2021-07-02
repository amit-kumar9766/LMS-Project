import * as ACTION_TYPES from "../actions/actionTypes";

export const auth = (state:any, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        isAuth: true,
        username: action.username,
        token: action.token,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isAuth: false,
        username: "",
        token: "",
      };
    default:
      return state;
  }
};
