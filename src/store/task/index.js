import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      tasks: [
        {
          id: "task1",
          title: "My Task 1",
          description:
            "This is the long description for my task 1. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 60, // 1 hour from now
          finished: false,
          category: "c1",
        },
        {
          id: "task2",
          title: "My Task 2",
          description:
            "This is the long description for my task 2. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 50, // 50 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task3",
          title: "My Task 3",
          description:
            "This is the long description for my task 3. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 40, // 40 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task4",
          title: "My Task 4",
          description:
            "This is the long description for my task 4. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 30, // 30 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task5",
          title: "My Task 5",
          description:
            "This is the long description for my task 5. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 30, // 30 mins from now
          finished: true,
          category: "c1",
        },
        {
          id: "task6",
          title: "My Task 6",
          description:
            "This is the long description for my task 6. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 30, // 30 mins from now
          finished: true,
          category: "c1",
        },
        {
          id: "task7",
          title: "My Task 7",
          description:
            "This is the long description for my task 7. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 30, // 30 mins from now
          finished: true,
          category: "c1",
        },
        {
          id: "task8",
          title: "My Task 8",
          description:
            "This is the long description for my task 8. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() - 1000 * 60 * 10, // 10 mins ago
          finished: false,
          category: "c1",
        },
        {
          id: "task9",
          title: "My Task 9",
          description:
            "This is the long description for my task 9. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() - 1000 * 60 * 20, // 20 mins ago
          finished: false,
          category: "c1",
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
