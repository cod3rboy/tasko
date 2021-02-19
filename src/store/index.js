import { createStore } from "vuex";
import category from "./category/index.js";
import task from "./task/index.js";

const store = createStore({
  modules: {
    category,
    task,
  },
  state() {
    return {
      drawerVisible: false,
    };
  },
  mutations: {
    setDrawerVisibility(state, payload) {
      state.drawerVisible = payload.visible;
    },
  },
  actions: {
    showDrawer(context) {
      context.commit("setDrawerVisibility", { visible: true });
    },
    hideDrawer(context) {
      context.commit("setDrawerVisibility", { visible: false });
    },
  },
  getters: {
    isDrawerVisible(state) {
      return state.drawerVisible;
    },
  },
});

export default store;
