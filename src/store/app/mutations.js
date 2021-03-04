export default {
  setData(state, payload) {
    state.data = payload.data;
    state.lastCategoryIndex = payload.lastCategoryIndex;
  },
  addCategory(state, payload) {
    const categoryId = payload.id;
    const categoryName = payload.name;
    const canDelete = payload.canDelete;
    const position = payload.position;
    const tasks = {};
    state.data = !!!state.data ? {} : state.data;
    state.data[categoryId].categoryName = categoryName;
    state.data[categoryId].canDelete = canDelete;
    state.data[categoryId].position = position;
    state.data[categoryId].tasks = tasks;
  },
  removeCategory(state, payload) {
    const categoryId = payload.id;
    if (!!state.data[categoryId]) delete state.data[categoryId];
  },
  saveCategoryName(state, payload) {
    const categoryId = payload.id;
    const newCategoryName = payload.name;
    state.data[categoryId].categoryName = newCategoryName;
  },
  swapCategoryPosition(state, payload) {
    const firstCategoryId = payload.firstId;
    const secondCategoryId = payload.secondId;
    const firstCategory = state.data[firstCategoryId];
    const secondCategory = state.data[secondCategoryId];
    const tempPos = firstCategory.position;
    firstCategory.position = secondCategory.position;
    secondCategory.position = tempPos;
  },
  saveTask(state, payload) {
    const categoryId = payload.categoryId;
    const taskId = payload.task.id;
    const taskTitle = payload.task.title;
    const taskDescription = payload.task.description;
    const taskDueDate = payload.task.dueDate;
    const taskFinished = payload.task.finished;
    state.data[categoryId].tasks[taskId] = {
      title: taskTitle,
      description: taskDescription,
      dueDate: taskDueDate,
      finished: taskFinished,
    };
  },
  removeTask(state, payload) {
    const categoryId = payload.categoryId;
    const taskId = payload.taskId;
    if (!!state.data[categoryId].tasks[taskId])
      delete state.data[categoryId].tasks[taskId];
  },
  setTaskFinished(state, payload) {
    const categoryId = payload.categoryId;
    const taskId = payload.taskId;
    const taskStatus = payload.taskStatus;
    state.data[categoryId].tasks[taskId] = taskStatus;
  },
};
