<template>
  <task-list :category-id="categoryId" :tasks="finishedTasks"></task-list>
</template>
<script>
import TaskList from "../components/tasks/TaskList.vue";

export default {
  components: {
    TaskList,
  },
  props: ["categoryId"],
  computed: {
    finishedTasks() {
      const tasks = this.$store.getters["task/tasks"];
      return tasks.filter(
        (task) => task.category === this.categoryId && task.finished
      );
    },
  },
};
</script>
