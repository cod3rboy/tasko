export default {
  currentUser(state) {
    return state.user;
  },
  userLoggedIn(state) {
    return !!state.user.isLoggedIn;
  },
  userInfo(state) {
    return state.user.info;
  },
};
