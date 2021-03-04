import firebase from "firebase/app";

export default {
  loadData(context) {
    const database = firebase.database();
    const currentUserId = context.getters["account/userId"];
    const userData = database.ref(currentUserId).toJSON();
    context.commit("setData", userData);
  },
  async createCategory(context, payload) {
    const categoryName = payload.name;
    const canDelete = !!!payload.isDefaultCategory;
    const nextCategoryIndex = context.getters["lastCategoryIndex"] + 1;

    const category = {
      categoryName,
      canDelete,
      position: nextCategoryIndex,
      tasks: {},
    };

    const userData = firebase.database().ref(context.getters["account/userId"]);
    const categoryRef = await userData.child("data").push(category);
    await userData.child("lastCategoryIndex").set(nextCategoryIndex);
    category.id = categoryRef.key;
    context.commit("addCategory", category);
    context.commit("setLastCategoryIndex", { index: nextCategoryIndex });
  },

  async deleteCategory(context, payload) {
    const categoryId = payload.id;
    const userData = firebase.database().ref(context.getters["account/userId"]);
    await userData.child("data/" + categoryId).remove();
    context.commit("removeCategory", payload);
  },

  async saveCategory(context, payload) {
    const categoryId = payload.id;
    const categoryName = payload.name;
    const canDelete = payload.canDelete;
    const position = payload.position;

    const userData = firebase.database().ref(context.getters["account/userId"]);
    const categoryRef = userData.child("data").child(categoryId);
    await categoryRef.child("categoryName").set(categoryName);
    await categoryRef.child("canDelete").set(canDelete);
    await categoryRef.child("position").set(position);

    context.commit("updateCategory", {
      id: categoryId,
      categoryName,
      canDelete,
      position,
    });
  },

  swapCategoriesPosition(context, payload) {
    const firstCategory = payload.categoryFirst;
    const secondCategory = payload.categorySecond;
    // Swap positions
    const tempPos = firstCategory.position;
    firstCategory.position = secondCategory.position;
    secondCategory.position = tempPos;

    context.dispatch("saveCategory", firstCategory);
    context.dispatch("saveCategory", secondCategory);
  },

  async createTask(context, payload) {
    const categoryId = payload.categoryId;
    const title = payload.task.title;
    const description = payload.task.description;
    const dueDate = payload.task.dueDate;
    const finished = payload.task.finished;

    const task = {
      title,
      description,
      dueDate,
      finished,
    };

    const userData = firebase.database().ref(context.getters["account/userId"]);
    const taskRef = await userData
      .child("data")
      .child(categoryId)
      .child("tasks")
      .push(task);
    task.id = taskRef.key;
    context.commit("saveTask", { categoryId, task });
  },

  async saveTask(context, payload) {
    const categoryId = payload.categoryId;
    const taskId = payload.task.id;
    const title = payload.task.title;
    const description = payload.task.description;
    const dueDate = payload.task.dueDate;
    const finished = payload.task.finished;

    const task = {
      title,
      description,
      dueDate,
      finished,
    };

    const userData = firebase.database().ref(context.getters["account/userId"]);
    await userData
      .child("data")
      .child(categoryId)
      .child("tasks")
      .child(taskId)
      .set(task);

    task.id = taskId;
    context.commit("saveTask", { categoryId, task });
  },

  async deleteTask(context, payload) {
    const categoryId = payload.categoryId;
    const taskId = payload.task.id;

    const userData = firebase.database().ref(context.getters["account/userId"]);
    await userData.child("data/" + categoryId + "/tasks/" + taskId).remove();
    context.commit("removeTask", payload);
  },
};
