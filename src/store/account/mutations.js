export default {
  setCurrentUser(state, payloadUser) {
    state.user = {};
    if (!!payloadUser.isLoggedIn) {
      state.user.isLoggedIn = payloadUser.isLoggedIn;
    }
    if (!!payloadUser.info) {
      state.user.info = payloadUser.info;
    }
  },
};
