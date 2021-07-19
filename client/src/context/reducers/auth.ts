import * as ACTION_TYPES from "../actions/actionTypes";

export const auth = (state:any, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        isAuth: true,
        token: action.payload,
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
