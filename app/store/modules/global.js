const Global = {
  namespaced: true,

  //  Initial state
  state() {
    return {
      loading: false,
    };
  },
};

// Getters
Global.getters = {
  getLoading: state => state.loading,
};

// Actions
Global.actions = {
  setLoadState: (state, bool) => {
    state.commit('updateLoading', bool);
  },
};

// Mutations
Global.mutations = {
  updateLoading(state, bool) {
    state.loading = bool;
  },
};

export default Global;