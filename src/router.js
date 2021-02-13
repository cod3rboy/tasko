import { createRouter, createWebHistory } from "vue-router";
import NewTask from "./pages/NewTask.vue";
import ActiveTasks from "./pages/ActiveTasks.vue";
import FinishedTasks from "./pages/FinishedTasks.vue";
import MissedTasks from "./pages/MissedTasks.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: {
        name: "active-tasks",
        params: { categoryId: "c1" },
      },
    },
    { path: "/new", component: NewTask, name: "new-task" },
    {
      path: "/:categoryId/active",
      component: ActiveTasks,
      name: "active-tasks",
      props: true,
    },
    {
      path: "/:categoryId/finished",
      component: FinishedTasks,
      name: "finished-tasks",
      props: true,
    },
    {
      path: "/:categoryId/missed",
      component: MissedTasks,
      name: "missed-tasks",
      props: true,
    },
  ],
});
export default router;
