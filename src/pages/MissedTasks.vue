<template>
  <task-list
    :category-id="categoryId"
    :tasks="missedTasks"
    empty-message="Great! you do not miss any task"
  ></task-list>
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
      const defaultCategoryId = this.$store.getters[
        "category/defaultCategoryId"
      ];
      return tasks.filter(
        (task) =>
          (this.categoryId === defaultCategoryId ||
            task.category === this.categoryId) &&
          !task.finished &&
          task.dueDate <= new Date().getTime()
      );
    },
  },
};
</script>
