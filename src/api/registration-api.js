import { api } from './api';


const address = "https://frozen-brushlands-54091.herokuapp.com/register";

export const registerStudent = async (info) => {
  const resp = await api("POST", address, info);
  return resp.data;
}
