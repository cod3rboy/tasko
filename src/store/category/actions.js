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
};
