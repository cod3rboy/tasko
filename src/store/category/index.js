import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      categories: [
        { id: "c1", name: "Home Tasks" },
        { id: "c2", name: "Daily Tasks" },
        { id: "c3", name: "Work Tasks" },
        { id: "c4", name: "Health Tasks" },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
