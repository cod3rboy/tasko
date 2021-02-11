export default {
  createCategory(context, payload) {
    context.commit("addCategory", payload.data);
  },
};
