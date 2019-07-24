import axios from 'axios';

export const api = (method, path, data) => {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        console.log("error")
        console.log(err);
        return reject(err);
      });
  });
}