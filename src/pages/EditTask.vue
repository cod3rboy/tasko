<template>
  <base-page title="Edit Task Details" :subtitle="subtitle">
    <task-form :initial-data="initialData" @form-submit="saveTask"></task-form>
  </base-page>
</template>

<script>
import TaskForm from "../components/tasks/TaskForm.vue";

export default {
  components: {
    TaskForm,
  },
  props: ["taskId"],
  data() {
    // Initializing task and category
    const task = this.$store.getters["task/tasks"].find(
      (t) => t.id === this.taskId
    );
    const category = this.$store.getters["category/categories"].find(
      (c) => c.id === task.category
    );
    return {
      task,
      category,
    };
  },
  computed: {
    subtitle() {
      return "Category: " + this.category.name;
    },
    initialData() {
      return {
        title: this.task.title,
        description: this.task.description,
        dueDate: this.task.dueDate,
      };
    },
  },
  methods: {
    saveTask(formData) {
      // Save modified task in store and redirect
      const modifiedTask = {
        taskId: this.taskId,
        ...formData,
      };
      this.$store.dispatch("task/saveTask", modifiedTask);
      this.$router.replace({
        name: "task-detail",
        params: { taskId: this.taskId },
      });
    },
  },
};
</script>
