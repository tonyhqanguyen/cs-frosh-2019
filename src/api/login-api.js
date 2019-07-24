import { api } from './api';


const address = "https://frozen-brushlands-54091.herokuapp.com/login";

export const login = async (info) => {
  const resp = await api("POST", address, info);
  return resp;
}
