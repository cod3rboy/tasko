export default {
  currentUser(state) {
    return state.currentUser;
  },
  hasLoggedIn(state) {
    return !!state.currentUser;
  },
};
