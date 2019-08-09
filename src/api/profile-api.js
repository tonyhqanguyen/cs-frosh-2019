import { api } from './api';


const updateInfoStudentAddress = "https://frozen-brushlands-54091.herokuapp.com/updateInfoStudent";

export const updateInfoStudent = async (info) => {
  const result = await api("POST", updateInfoStudentAddress, info);
  return result;
}