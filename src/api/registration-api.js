import { api } from './api';


const address = "http://localhost:4000/register";

export const registerStudent = async (info) => {
  const resp = await api("POST", address, info);
  return resp.data;
}
