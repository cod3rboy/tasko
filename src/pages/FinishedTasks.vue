<template>
  <task-list
    :category-id="categoryId"
    :tasks="finishedTasks"
    empty-message="No tasks are finished yet"
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
    finishedTasks() {
      const tasks = this.$store.getters["task/tasks"];
      const defaultCategoryId = this.$store.getters[
        "category/defaultCategoryId"
      ];
      return tasks.filter(
        (task) =>
          (this.categoryId === defaultCategoryId ||
            task.category === this.categoryId) &&
          task.finished
      );
    },
  },
};
</script>
