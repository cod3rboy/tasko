import { createRouter, createWebHistory } from "vue-router";
import NewTask from "./pages/NewTask.vue";
import ActiveTaskList from "./pages/ActiveTaskList.vue";
import FinishedTaskList from "./pages/FinishedTaskList.vue";
import MissedTaskList from "./pages/MissedTaskList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: { name: "active-tasks" } },
    { path: "/new", component: NewTask, name: "new-task" },
    { path: "/active", component: ActiveTaskList, name: "active-tasks" },
    { path: "/finished", component: FinishedTaskList, name: "finished-tasks" },
    { path: "/missed", component: MissedTaskList, name: "missed-tasks" },
  ],
});
export default router;
