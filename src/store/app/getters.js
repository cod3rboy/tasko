export default {
  categories(state) {
    const categories = [];
    for (let categoryId in state.data) {
      const category = state.data[categoryId];
      categories.push({
        id: categoryId,
        name: category.categoryName,
        position: category.position,
        canDelete: category.canDelete,
      });
    }
    // sort categories by position
    categories.sort((c1, c2) => c1.position - c2.position);
    return categories;
  },
  lastCategoryIndex(state) {
    return state.lastCategoryIndex;
  },
  tasks: (state) => (categoryId) => {
    const tasks = [];
    for (let taskId in state.data[categoryId].tasks) {
      const task = state.data[categoryId].tasks[taskId];
      tasks.push({
        id: taskId,
        ...task,
      });
    }
    // sort tasks by id
    tasks.sort((t1, t2) => t1.id.localeCompare(t2.id));
    return tasks;
  },
  activeTasks: (_, getters) => (categoryId) => {
    const allTasks = getters.tasks(categoryId);
    return allTasks.filter(
      (task) => !task.finished && task.dueDate > new Date().getTime()
    );
  },
  finishedTasks: (_, getters) => (categoryId) => {
    const allTasks = getters.tasks(categoryId);
    return allTasks.filter((task) => task.finished);
  },
  missedTasks: (_, getters) => (categoryId) => {
    const allTasks = getters.tasks(categoryId);
    return allTasks.filter(
      (task) => !task.finished && task.dueDate <= new Date().getTime()
    );
  },
};
