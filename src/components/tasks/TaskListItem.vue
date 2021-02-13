<template>
  <base-card>
    <div class="flex-container">
      <base-checkbox
        :checked="taskItem.finished"
        @check-change="setTaskStatus"
      ></base-checkbox>
      <div class="detail">
        <div class="title">{{ taskItem.title }}</div>
        <div class="date">Due Date : {{ dueDate }}</div>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["taskItem"],
  computed: {
    dueDate() {
      return new Date(this.taskItem.dueDate).toLocaleString();
    },
  },
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
  gap: 0.2em;
}
.flex-container > .detail {
  flex: 1 1 auto;
}
.detail .title {
  color: var(--color-accent);
}
.detail .date {
  color: var(--color-surface-text);
  font-size: 0.6em;
  margin: 0.5em 0;
}
</style>
