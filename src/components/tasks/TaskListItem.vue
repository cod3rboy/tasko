<template>
  <base-card>
    <div class="flex-container">
      <base-checkbox
        :checked="taskItem.finished"
        @check-change="setTaskStatus"
      ></base-checkbox>
      <div class="detail">
        <div class="title">{{ taskItem.title }}</div>
        <div class="date">Due Date : {{ taskItem.dueDate }}</div>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["taskItem"],
  methods: {
    setTaskStatus(taskFinished) {
      const payload = { taskId: this.taskItem.id };
      if (taskFinished) this.$store.dispatch("task/markFinished", payload);
      else this.$store.dispatch("task/markActive", payload);
    },
  },
};
</script>
<style scoped>
.flex-container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5em;
}
.flex-container > .detail {
  flex: 1 1 auto;
}
</style>
