<template>
  <ul>
    <task-list-item
      v-for="task in tasks"
      :key="task.id"
      :task-item="task"
    ></task-list-item>
  </ul>
</template>

<script>
import TaskListItem from "./TaskListItem.vue";

export default {
  props: ["categoryId", "tasks"],
  components: {
    TaskListItem,
  },
};
</script>

<style scoped>
ul {
  font-size: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
