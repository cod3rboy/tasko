import { createRouter, createWebHistory } from "vue-router";
import NewTask from "./pages/NewTask.vue";
import ActiveTaskList from "./pages/ActiveTaskList.vue";
import FinishedTaskList from "./pages/FinishedTaskList.vue";
import MissedTaskList from "./pages/MissedTaskList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: { name: "active-tasks", params: { categoryId: "c1" } },
    },
    { path: "/new", component: NewTask, name: "new-task" },
    {
      path: "/:categoryId/active",
      component: ActiveTaskList,
      name: "active-tasks",
      props: true,
    },
    {
      path: "/:categoryId/finished",
      component: FinishedTaskList,
      name: "finished-tasks",
      props: true,
    },
    {
      path: "/:categoryId/missed",
      component: MissedTaskList,
      name: "missed-tasks",
      props: true,
    },
  ],
});
export default router;
