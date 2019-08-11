import { api } from './api';


const studentAddress = "https://frozen-brushlands-54091.herokuapp.com/getStudents";

export const getStudents = async (query) => {
  const resp = await api("POST", studentAddress, query);
  return resp;
}

const searchStudentAddress = "https://frozen-brushlands-54091.herokuapp.com/searchStudents";

export const searchStudents = async (query) => {
  const resp = await api("POST", searchStudentAddress, query);
  return resp;
}

const unconfirmedStudentAddress = "https://frozen-brushlands-54091.herokuapp.com/getUnconfirmedStudents";

export const getUnconfirmedStudents = async (query) => {
  const resp = await api("POST", unconfirmedStudentAddress, query);
  return resp;
}

const searchUnconfirmedStudentAddress = "https://frozen-brushlands-54091.herokuapp.com/searchUnconfirmedStudents";

export const searchUnconfirmedStudents = async (query) => {
  const resp = await api("POST", searchUnconfirmedStudentAddress, query);
  return resp;
}


const clubAddress = "https://frozen-brushlands-54091.herokuapp.com/getClubs";

export const getClubs = async (query) => {
  const resp = await api("POST", clubAddress, query);
  return resp;
}


const searchClubAddress = "https://frozen-brushlands-54091.herokuapp.com/searchClubs";

export const searchClubs = async (query) => {
  const resp = await api("POST", searchClubAddress, query);
  return resp;
}