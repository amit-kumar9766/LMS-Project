export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

interface authData {
  type: typeof LOGIN | typeof LOGOUT;
  payload: [];
}

export type authTypes = authData;
