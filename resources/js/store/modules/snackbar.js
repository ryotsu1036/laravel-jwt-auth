import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    snackbar: false,
    text: ''
  },
  mutations: {
    showSnackbar(state, text) {
      state.text = text;
      state.snackbar = true;
    }
  }
});

export default store;
