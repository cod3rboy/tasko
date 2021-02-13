import { createRouter, createWebHistory } from "vue-router";
import NewTask from "./pages/NewTask.vue";
import TaskList from "./pages/TaskList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: {
        name: "task-list",
        params: { categoryId: "c1", taskType: "active" },
      },
    },
    { path: "/new", component: NewTask, name: "new-task" },
    {
      path: "/:categoryId/:taskType(active|finished|missed)",
      component: TaskList,
      name: "task-list",
      props: true,
    },
  ],
});
export default router;
