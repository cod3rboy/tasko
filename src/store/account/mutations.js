export default {
  setCurrentUser(state, payload) {
    const { fullName, userId } = payload;
    state.currentUser = {
      fullName,
      userId,
    };
  },
};
