// initial state
const state = {
  color: '',
  visible: false,
  text: 'Hello, I\'m a snackbar',
  timeout: 6000,
}

// getters
const getters = {};

// actions
const actions = {
  showSnackbar(context, data) {
    let timeout = (data.timeout === undefined) ? context.state.timeout : data.timeout ;

    context.commit('setSnackbar', data);

    setTimeout(() => {
      context.state.visible = false;
    }, timeout);
  }
};

// mutations
const mutations = {
  setSnackbar(state, data) {
    state.color = data.color;
    state.visible = true;
    state.text = data.text;
    state.timeout = data.timeout;
  },
  close(state) {
    state.visible = false;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
