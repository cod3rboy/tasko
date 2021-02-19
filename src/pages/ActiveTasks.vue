<template>
  <task-list :category-id="categoryId" :tasks="activeTasks"></task-list>
</template>
<script>
import TaskList from "../components/tasks/TaskList.vue";

export default {
  components: {
    TaskList,
  },
  props: ["categoryId"],
  computed: {
    activeTasks() {
      const tasks = this.$store.getters["task/tasks"];
      return tasks.filter(
        (task) =>
          task.category === this.categoryId &&
          !task.finished &&
          task.dueDate > new Date().getTime()
      );
    },
  },
  mounted() {
    if (this.activeTasks.length === 0) {
      this.$router.replace({
        name: "not-found",
        params: { notFound: this.$route.path.substring(1).split("/") },
      });
    }
  },
};
</script>
