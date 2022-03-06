const state = () => ({
  account: undefined,
});

const getters = {
  account: (state) => state.account,
  isConnected: (state) => state.account || false,
};

const actions = {
  async storeAccount({ commit }, account) {
    commit("SET_ACCOUNT", account);
  },
};

const mutations = {
  SET_ACCOUNT(state, str) {
    state.account = str;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
