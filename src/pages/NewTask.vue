<template>
  <base-page title="Create New Task" :subtitle="subtitle">
    <task-form @form-submit="saveTask"></task-form>
  </base-page>
</template>

<script>
import TaskForm from "../components/tasks/TaskForm.vue";

export default {
  components: {
    TaskForm,
  },
  props: ["categoryId"],
  computed: {
    category() {
      const categories = this.$store.getters["category/categories"];
      return categories.find((category) => category.id === this.categoryId);
    },
    subtitle() {
      return "Category: " + this.category.name;
    },
  },
  methods: {
    saveTask(formData) {
      // Save new task in store and redirect
      const newTask = {
        category: this.categoryId,
        ...formData,
      };
      this.$store.dispatch("task/createTask", newTask);
      this.$router.replace({
        name: "active-tasks",
        params: { categoryId: this.categoryId },
      });
    },
  },
};
</script>
