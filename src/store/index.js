import { createStore } from "vuex";
import category from "./category/index.js";
import task from "./task/index.js";

const store = createStore({
  modules: {
    category,
    task,
  },
  state() {
    return {};
  },
  mutations: null,
  actions: null,
  getters: null,
});

export default store;
