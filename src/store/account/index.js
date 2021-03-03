import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

// Check login status flag in the browser local storage
// and initialize login status using that value.
const userIsLoggedIn = localStorage.getItem("loggedIn") === "true";

export default {
  namespaced: true,
  state() {
    return {
      user: {
        isLoggedIn: userIsLoggedIn,
        info: null,
      },
    };
  },
  getters,
  mutations,
  actions,
};
