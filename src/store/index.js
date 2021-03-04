import { createStore } from "vuex";
import account from "./account/index.js";
import app from "./app/index.js";

const store = createStore({
  modules: {
    account,
    app,
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
