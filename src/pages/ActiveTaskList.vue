<template>
  <section>
    <ul>
      <li v-for="task in activeTasks" :key="task.id">
        <task-list-item :task-item="task"></task-list-item>
      </li>
    </ul>
  </section>
</template>

<script>
import TaskListItem from "../components/tasks/TaskListItem.vue";

export default {
  props: ["categoryId"],
  components: {
    TaskListItem,
  },
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
};
</script>

<style scoped>
section {
  font-size: 1.5rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
