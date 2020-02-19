// initial state
const state = {
  color: '',
  visible: false,
  text: 'Hello, I\'m a snackbar',
  timeout: 6000,
}

// mutations
const mutations = {
  open(state, data) {
    state.color = data.color;
    state.visible = true;
    state.text = data.text;
  },
  close(state) {
    state.visible = false;
  }
}

// actions
const actions = {
  open(context, data) {
    let timeout = context.state.timeout;

    context.commit('open', data);

    setTimeout(() => {
      context.commit('close');
    }, timeout);
  }
};


export default {
  namespaced: true,
  state,
  actions,
  mutations
}
