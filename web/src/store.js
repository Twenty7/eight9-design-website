import {createStore} from 'vuex'
import api from "./http"


export default createStore({
  state: {
    // locale
    language: null,

    site: {
      static_forms_key: "",
      email: "info@eight9.net",
      address1: "1968 S. Coast Hwy #2707",
      address2: "Laguna Beach, CA 92651",
      website: "https://eight9.net",
    },
    loading_products: true,
    products: [],
  },
  getters: {
    get_site_info(state) {
      return state.site;
    },


  },
  actions: {
    // Contact
    do_submit_contact({commit}, req) {
      console.log('do submit contact');
      return new Promise((resolve, reject) => {
        api.send_contact_form(req).then(resp => {
          console.log('RESPONSE', resp.status);
          if (resp.status != 200) {
            console.error('Response', resp);
            reject(resp);
          } else {
            resolve(resp.data);
          }
        }).catch(err => {
          reject(err);
        })
      });
    },




    do_fetch_products({commit}, req) {
      return new Promise((resolve, reject) => {
        commit('update_loading_products', true);
        api.fetch_products(req).then(resp => {
          if (!resp.success) {
            commit('update_products', resp.products);
            reject(resp);
          } else {
            resolve(resp);
          }
          commit('update_loading_products', false);
        }).catch(err => {
          console.error('Error Loading Products', err);
          commit('update_loading_products', false);
          reject(err);
        })
      });
    },


  },
  mutations: {
    update_loading_products(state, loading) {
      state.loading_products = loading;
    },
    update_products(state, products) {
      state.products = products;
    },

  },

})
