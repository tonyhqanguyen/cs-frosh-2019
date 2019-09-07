import { api } from './api';


const questionsAddress = "https://frozen-brushlands-54091.herokuapp.com/questions";

export const registerQuestion = async (info) => {
  const resp = await api("POST", questionsAddress, info);
  return resp;
}


const retrieveQuestionsAddress = "https://frozen-brushlands-54091.herokuapp.com/getQuestions";

export const getQuestions = async (token) => {
  const resp = await api("POST", retrieveQuestionsAddress, token);
  return resp;
}


const setAnsweredAddress = "https://frozen-brushlands-54091.herokuapp.com/setAnswered";

export const setAnswered = async (question) => {
  const resp = await api("POST", setAnsweredAddress, question);
  return resp;
}