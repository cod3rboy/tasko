export default {
  setTaskStatus(state, payload) {
    const taskId = payload.taskId;
    const taskStatus = payload.taskStatus;
    const targetTask = state.tasks.find((task) => task.id === taskId);
    targetTask.finished = taskStatus;
  },
  addTask(state, payload) {
    state.tasks.unshift(payload);
  },
  updateTask(state, payload) {
    const taskId = payload.taskId;
    const targetTask = state.tasks.find((task) => task.id === taskId);
    targetTask.title = payload.title;
    targetTask.description = payload.description;
    targetTask.dueDate = payload.dueDate;
  },
  removeTask(state, payload) {
    const taskId = payload.taskId;
    let taskIndex = -1;
    for (let i = 0; i < state.tasks.length; i++) {
      if (state.tasks[i].id === taskId) {
        taskIndex = i;
        break;
      }
    }
    if (taskIndex >= 0) {
      state.tasks.splice(taskIndex, 1); // Remove task
    }
  },
};
