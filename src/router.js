import { createRouter, createWebHistory } from "vue-router";
import NewTask from "./pages/NewTask.vue";
import ActiveTasks from "./pages/ActiveTasks.vue";
import TheTabLayout from "./components/layout/TheTabLayout.vue";
import FinishedTasks from "./pages/FinishedTasks.vue";
import MissedTasks from "./pages/MissedTasks.vue";
import TaskDetail from "./pages/TaskDetail.vue";
import EditTask from "./pages/EditTask.vue";
import NotFound from "./pages/NotFound.vue";
import ManageCategories from "./pages/ManageCategories.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import store from "./store/index.js";

function verifyCategoryNavigation(to, _, next) {
  const categoryId = to.params.categoryId;
  const categories = store.getters["app/categories"];
  if (categories.filter((category) => category.id === categoryId).length > 0) {
    next();
  } else {
    next({ name: "not-found", params: { notFound: to.path } });
  }
}
function verifyTaskNavigation(to, _, next) {
  const categoryId = to.params.categoryId;
  const taskId = to.params.taskId;
  const tasks = store.getters["app/tasks"](categoryId);
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
      path: "/",
      name: "home",
      redirect: {
        name: "manage-categories",
      },
    },
    {
      path: "/account/login",
      component: Login,
      name: "login",
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/account/signup",
      component: Signup,
      name: "signup",
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/categories/manage",
      component: ManageCategories,
      name: "manage-categories",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:categoryId",
      name: "category-tasks",
      component: TheTabLayout,
      meta: {
        requiresAuth: true,
      },
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
      path: "/:categoryId/tasks/new",
      component: NewTask,
      name: "new-task",
      props: true,
      meta: {
        requiresAuth: true,
      },
      beforeEnter: verifyCategoryNavigation,
    },
    {
      path: "/:categoryId/tasks/:taskId/view",
      name: "task-detail",
      component: TaskDetail,
      props: true,
      meta: {
        requiresAuth: true,
      },
      beforeEnter: verifyTaskNavigation,
    },
    {
      path: "/:categoryId/tasks/:taskId/edit",
      name: "task-edit",
      component: EditTask,
      props: true,
      meta: {
        requiresAuth: true,
      },
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

router.beforeEach((to, _, next) => {
  if (!!to.meta) {
    const requireAuthentication = !!to.meta.requiresAuth;
    const userLoggedIn = store.getters["account/userLoggedIn"];
    if (requireAuthentication && !userLoggedIn) {
      // redirect Guest User to login page
      next({ name: "login" });
      return;
    } else if (!requireAuthentication && userLoggedIn) {
      // redirect Logged in user to home page
      next({ name: "home" });
      return;
    }
  }
  next();
});
export default router;
