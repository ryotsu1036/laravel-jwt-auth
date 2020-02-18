// initial state
const state = {
  count: 0
}

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
