// import store from '../store';
import axios from 'axios';

axios.interceptors.response.use(undefined, function (error) {
  if (error.response) {
    // Request made and server responded
    console.error('Axios HTTP ' + error.response.status, error.message);
    console.error('Error Data', error.response.data);
    // if (error.response.status == 401) {
    //   if (window.location.hash != '/login') {
    //     window.location.href = '/logout';
    //   }
    // } else if (error.response.status == 419) {
    //   window.location.reload();
    // }
    return error.response;
  } else if (error.request) {
     // The request was made but no response was received
    console.error('Axios Error', error.request);
  } else {
     // Something happened in setting up the request that triggered an Error
    console.error('Axios HTTP', error.message);
  }
  return Promise.reject(error);
});

export default {
  async send_contact_form(request) {
    let options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    let response = await axios.post(`https://fabform.io/f/w7Nh5_x`, request, options);
    // const { data } = await axios.post(`https://api.staticforms.xyz/submit`, request, options);
    return response;
  },
  // async fetch_products(request) {
  //   const { data } = await axios.get(`/api/fetch-products`, request);
  //   return data;
  // },

}
