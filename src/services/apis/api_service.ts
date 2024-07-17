import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.API_URL,

    headers: {
        'Access-Control-Allow-Origin': '',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT, PATCH'
    },
});

api.interceptors.response.use(function (response) {
    response.headers['content-type'] = 'application/json';
    
    return response;
  }, function (error) {
    // Trate erros de resposta
    return Promise.reject(error);
  });

