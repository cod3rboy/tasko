export default {
  createCategory(context, payload) {
    context.commit("addCategory", {
      id: new Date().toISOString(),
      name: payload.category,
    });
  },
  deleteCategory(context, payload) {
    context.commit("removeCategory", payload);
  },
  saveCategory(context, payload) {
    context.commit("saveCategory", {
      categoryId: payload.id,
      categoryName: payload.name,
    });
  },
  moveCategoryUp(context, payload) {
    context.commit("moveCategory", {
      oldIndex: payload.categoryIndex,
      newIndex: Math.max(0, payload.categoryIndex - 1),
    });
  },
  moveCategoryDown(context, payload) {
    context.commit("moveCategory", {
      oldIndex: payload.categoryIndex,
      newIndex: Math.min(
        payload.categoryIndex + 1,
        context.getters.categories.length - 1
      ),
    });
  },
};
