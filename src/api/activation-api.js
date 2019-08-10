import { api } from './api';


const activateAddress = "https://frozen-brushlands-54091.herokuapp.com/activate";

export const activateAccount = async (info) => {
  const resp = await api("POST", activateAddress, info);
  return resp.data;
}

const passwordAddress = "https://frozen-brushlands-54091.herokuapp.com/createPassword";

export const createPassword = async (info) => {
  const resp = await api("POST", passwordAddress, info);
  return resp.data;
}