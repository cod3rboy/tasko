import { createRouter, createWebHistory } from "vue-router";
import NewTask from "./pages/NewTask.vue";
import ActiveTasks from "./pages/ActiveTasks.vue";
import TheTabLayout from "./components/layout/TheTabLayout.vue";
import FinishedTasks from "./pages/FinishedTasks.vue";
import MissedTasks from "./pages/MissedTasks.vue";
import TaskDetail from "./pages/TaskDetail.vue";
import EditTask from "./pages/EditTask.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:categoryId/new",
      component: NewTask,
      name: "new-task",
      props: true,
    },
    {
      path: "/:categoryId",
      name: "category-tasks",
      component: TheTabLayout,
      redirect: (to) => {
        return {
          name: "active-tasks",
          params: { categoryId: to.params.categoryId },
        };
      },
      children: [
        {
          path: "active",
          component: ActiveTasks,
          name: "active-tasks",
          props: true,
        },
        {
          path: "finished",
          component: FinishedTasks,
          name: "finished-tasks",
          props: true,
        },
        {
          path: "missed",
          component: MissedTasks,
          name: "missed-tasks",
          props: true,
        },
      ],
      props: true,
    },
    {
      path: "/tasks/:taskId",
      name: "task-detail",
      component: TaskDetail,
      props: true,
    },
    {
      path: "/tasks/:taskId/edit",
      name: "task-edit",
      component: EditTask,
      props: true,
    },
    {
      // Not Found Route
      path: "/:notFound(.*)",
      name: "not-found",
      component: NotFound,
      props: true,
    },
  ],
});
export default router;
