import { api } from './api';


const address = "https://frozen-brushlands-54091.herokuapp.com/authenticate";

export const authenticate = async (token) => {
  const resp = await api("POST", address, token);
  return resp;
}
