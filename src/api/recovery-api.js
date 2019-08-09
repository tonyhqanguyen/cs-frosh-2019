import { api } from './api';


const studentPasswordRecoverAddress = "https://frozen-brushlands-54091.herokuapp.com/recoverPasswordStudent";

export const recoverPasswordStudent = async (password) => {
  const resp = await api("POST", studentPasswordRecoverAddress, password);
  return resp;
}


const verifyTokenAddress = "https://frozen-brushlands-54091.herokuapp.com/verifyRecoverToken";

export const verifyRecoverToken = async (token) => {
  const resp = await api("POST", verifyTokenAddress, token);
  console.log(resp)
  return resp;
}