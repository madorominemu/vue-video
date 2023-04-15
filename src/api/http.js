import axios from 'axios';
axios.defaults.headers.post['Content-type'] = 'application/json';

export function post(url, data = {}) {
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      })
  });
}
