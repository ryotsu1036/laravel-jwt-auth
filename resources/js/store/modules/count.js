const state = {
  count: 0
}

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
  mutations
}
