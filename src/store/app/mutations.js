export default {
  setData(state, payload) {
    state.data = payload.data;
    state.lastCategoryIndex = payload.lastCategoryIndex;
  },
  setLastCategoryIndex(state, payload) {
    state.lastCategoryIndex = payload.index;
  },
  addCategory(state, payload) {
    const categoryId = payload.id;
    const categoryName = payload.categoryName;
    const canDelete = payload.canDelete;
    const position = payload.position;
    const tasks = payload.tasks;
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
  updateCategory(state, payload) {
    const categoryId = payload.id;
    const newCategoryName = payload.categoryName;
    const newPosition = payload.position;
    const newCanDelete = payload.canDelete;
    state.data[categoryId].categoryName = newCategoryName;
    state.data[categoryId].position = newPosition;
    state.data[categoryId].canDelete = newCanDelete;
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
    const taskId = payload.task.id;
    if (!!state.data[categoryId].tasks[taskId])
      delete state.data[categoryId].tasks[taskId];
  },
};
