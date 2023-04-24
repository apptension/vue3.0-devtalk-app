import { createStore } from 'vuex';

export default createStore({
  state: {
    language: 'English',
  },
  getters: {
    getLanguage: (state) => {
      return state.language;
    },
  },
  mutations: {
    updateLanguage: (state, payload) => {
      state.language = payload;
    },
  },
  actions: {},
  modules: {},
});
