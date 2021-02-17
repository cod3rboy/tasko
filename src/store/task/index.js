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
        {
          id: "task10",
          title: "My Task 10",
          description: "",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task11",
          title: "My Task 11",
          description:
            "This is the long description for my task 11. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task12",
          title: "My Task 12",
          description:
            "This is the long description for my task 12. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task13",
          title: "My Task 13",
          description:
            "This is the long description for my task 13. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task14",
          title: "My Task 14",
          description:
            "This is the long description for my task 14. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task15",
          title: "My Task 15",
          description:
            "This is the long description for my task 15. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task16",
          title: "My Task 16",
          description:
            "This is the long description for my task 16. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task17",
          title: "My Task 17",
          description:
            "This is the long description for my task 17. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task18",
          title: "My Task 18",
          description:
            "This is the long description for my task 18. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task19",
          title: "My Task 19",
          description:
            "This is the long description for my task 19. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
          finished: false,
          category: "c1",
        },
        {
          id: "task20",
          title: "My Task 20",
          description:
            "This is the long description for my task 20. This is not really short description but a very very very looongg description.",
          dueDate: new Date().getTime() + 1000 * 60 * 20, // 20 mins from now
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
