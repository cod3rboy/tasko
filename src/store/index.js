import { createStore } from "vuex";
import category from "./category/index.js";

const store = createStore({
  modules: {
    category,
  },
  state() {
    return {};
  },
  mutations: null,
  actions: null,
  getters: null,
});

export default store;
