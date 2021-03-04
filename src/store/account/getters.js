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
  userFullName(state) {
    return state.user.info ? state.user.info.displayName : "";
  },
  userId(state) {
    return state.user.info ? state.user.info.uid : null;
  },
};
