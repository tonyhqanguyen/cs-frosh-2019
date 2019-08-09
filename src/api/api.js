import axios from 'axios';

export const api = (method, path, data) => {
  return new Promise( async (resolve, reject) => {
    try {
      const result = await axios[method.toLowerCase()](path, data);
      return resolve(result);
    } catch (error) {
      return reject(error.response);
    }
  });
}