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
};
