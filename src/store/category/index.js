import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      defaultCategory: {
        id: "all",
        name: "All Tasks",
      },
      categories: [
        { id: "c1", name: "Home Tasks" },
        { id: "c2", name: "Daily Tasks" },
        { id: "c3", name: "Work Tasks" },
        { id: "c4", name: "Health Tasks" },
        { id: "c5", name: "Dummy Category 1" },
        { id: "c6", name: "Dummy Category 2" },
        { id: "c7", name: "Dummy Category 3" },
        { id: "c8", name: "Dummy Category 4" },
        { id: "c9", name: "Dummy Category 5" },
        { id: "c10", name: "Dummy Category 6" },
        { id: "c11", name: "Dummy Category 7" },
        { id: "c12", name: "Dummy Category 8" },
        { id: "c13", name: "Dummy Category 9" },
        { id: "c14", name: "Dummy Category 10" },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
