const state = () => ({
  maxSupply: 0,
  totalSupply: 0,
});

const getters = {
  maxSupply: (state) => state.maxSupply,
  totalSupply: (state) => state.totalSupply,
};

const actions = {
  async storeTotalSupply({ commit }, total) {
    commit("SET_TOTAL_SUPPLY", total);
  },
};

const mutations = {
  SET_TOTAL_SUPPLY(state, int) {
    state.totalSupply = int;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
