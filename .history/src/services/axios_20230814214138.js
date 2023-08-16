import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        Authorization: `Bearer`
    }
});
// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);
