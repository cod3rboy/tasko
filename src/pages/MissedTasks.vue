<template>
  <section>
    <task-list :categoryId="categoryId" :tasks="missedTasks"></task-list>
  </section>
</template>
<script>
import TaskList from "../components/tasks/TaskList.vue";
export default {
  components: {
    TaskList,
  },
  props: ["categoryId"],
  computed: {
    missedTasks() {
      const tasks = this.$store.getters["task/tasks"];
      return tasks.filter(
        (task) =>
          task.category === this.categoryId &&
          !task.finished &&
          task.dueDate <= new Date().getTime()
      );
    },
  },
};
</script>
