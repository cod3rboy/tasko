export default {
  markActive(context, payload) {
    context.commit("setTaskStatus", {
      taskStatus: false,
      taskId: payload.taskId,
    });
  },
  markFinished(context, payload) {
    context.commit("setTaskStatus", {
      taskStatus: true,
      taskId: payload.taskId,
    });
  },
  createTask(context, payload) {
    const task = {
      id: new Date().toISOString(),
      finished: false,
      ...payload,
    };
    context.commit("addTask", task);
  },
};
