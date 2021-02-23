export default {
  addCategory(state, payload) {
    state.categories.push(payload);
  },
  removeCategory(state, payload) {
    const categoryId = payload.categoryId;
    const index = state.categories.findIndex(
      (category) => category.id === categoryId
    );
    state.categories.splice(index, 1);
  },
};
