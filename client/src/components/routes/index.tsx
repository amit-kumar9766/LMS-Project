import { Signup } from "../Authentication/Signup";
import { Login } from "../Authentication/Login";

const routes = [
  {
    path: "/register",
    component: Signup,
    title: "Register",
    needsAuth: false,
  },
  {
    path: "/login", //->login component  why writing /auth/login is a problem
    component: Login,
    title: "Login",
    needsAuth: false,
  },
];

export default routes;
