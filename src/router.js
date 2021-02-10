import { createRouter, createWebHistory } from "vue-router";
import NewTask from "./pages/NewTask.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/new", component: NewTask, name: "new-task" }],
});
export default router;
