import { api } from './api';


const addressStudent = "https://frozen-brushlands-54091.herokuapp.com/registerStudent";

export const registerStudent = async (info) => {
  const resp = await api("POST", addressStudent, info);
  return resp.data;
}

const addressClub = "https://frozen-brushlands-54091.herokuapp.com/registerClub";

export const registerClub = async (info) => {
  const resp = await api("POST", addressClub, info);
  return resp;
}