import { createRouter, createWebHistory } from "vue-router";
import NewTask from "./pages/NewTask.vue";
import ActiveTasks from "./pages/ActiveTasks.vue";
import TheTabLayout from "./components/layout/TheTabLayout.vue";
import FinishedTasks from "./pages/FinishedTasks.vue";
import MissedTasks from "./pages/MissedTasks.vue";
import TaskDetail from "./pages/TaskDetail.vue";
import EditTask from "./pages/EditTask.vue";
import NotFound from "./pages/NotFound.vue";
import store from "./store/index.js";

function verifyCategoryNavigation(to, _, next) {
  const categoryId = to.params.categoryId;
  const categories = store.getters["category/categories"];
  if (categories.filter((category) => category.id === categoryId).length > 0) {
    next();
  } else {
    next({ name: "not-found", params: { notFound: to.path } });
  }
}
function verifyTaskNavigation(to, _, next) {
  const taskId = to.params.taskId;
  const tasks = store.getters["task/tasks"];
  if (tasks.filter((task) => task.id === taskId).length > 0) {
    next();
  } else {
    next({ name: "not-found", params: { notFound: to.path } });
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:categoryId/new",
      component: NewTask,
      name: "new-task",
      props: true,
      beforeEnter: verifyCategoryNavigation,
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
      beforeEnter: verifyCategoryNavigation,
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
      beforeEnter: verifyTaskNavigation,
    },
    {
      path: "/tasks/:taskId/edit",
      name: "task-edit",
      component: EditTask,
      props: true,
      beforeEnter: verifyTaskNavigation,
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
