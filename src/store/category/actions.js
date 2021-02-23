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
};
