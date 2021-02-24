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
  saveCategory(state, payload) {
    const categoryId = payload.categoryId;
    const index = state.categories.findIndex(
      (category) => category.id === categoryId
    );
    state.categories[index].name = payload.categoryName;
  },
  moveCategory(state, payload) {
    const newIndex = payload.newIndex;
    const index = payload.oldIndex;
    if (index < 0) {
      throw new Error("Category index " + index + " is out of range.");
    }
    if (newIndex < 0 || newIndex >= state.categories.length) {
      throw new Error(
        "Invalid new index " +
          newIndex +
          ". Cannot move category at index " +
          index
      );
    }
    // Swap categories at index and newIndex
    const temp = state.categories[newIndex];
    state.categories[newIndex] = state.categories[index];
    state.categories[index] = temp;
  },
};
