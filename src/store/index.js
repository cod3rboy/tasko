import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { createStore } from "vuex";
import account from "./account/index.js";
import category from "./category/index.js";
import task from "./task/index.js";

// Configure firebase
const firebaseConfig = {
  apiKey: "AIzaSyDr_QQjTpu4wwvbPVqUlEudKkkDIlD8yoc",
  authDomain: "tasko-app.firebaseapp.com",
  databaseURL: "https://tasko-app-default-rtdb.firebaseio.com",
  projectId: "tasko-app",
  storageBucket: "tasko-app.appspot.com",
  messagingSenderId: "234046392072",
  appId: "1:234046392072:web:f787b7f38e64fb3467cebd",
};
firebase.initializeApp(firebaseConfig);

const store = createStore({
  modules: {
    account,
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
