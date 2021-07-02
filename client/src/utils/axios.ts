import axios from "axios";

axios.defaults.baseURL = window.location.origin;

axios.interceptors.response.use(
  (response) => {
    if (response.status === 302) {
      window.location.href = "/logout";
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    //config.headers["X-CSRFToken"] = getCookie("csrftoken");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const GET = (url: string, options?: any) => {
  return axios.get(url, options);
};

const POST = (url: string, data?: any, options?: any) => {
  return axios.post(url, data, options);
};

const PUT = (url: string, data?: any, options?: any) => {
  return axios.put(url, data, options);
};

const DELETE = (url: string, options?: any) => {
  return axios.delete(url, options);
};

export { GET, POST, PUT, DELETE };
