import axios from 'axios';

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
