<template>
  <base-page :title="task.title" :subtitle="subtitle">
    <div class="field">
      <label>Description</label>
      <div class="value" v-if="task.description !== ''">
        {{ task.description }}
      </div>
      <div class="value" v-else>
        <i>No Description</i>
      </div>
    </div>
    <div class="field">
      <label>Due Date</label>
      <div class="value">{{ dueDate }}</div>
    </div>
    <div class="field">
      <label>Status</label>
      <div class="value">{{ taskStatus }}</div>
    </div>
    <base-float-button
      alt-text="Edit Task"
      icon-code="f303"
      :link="editTaskLink"
    ></base-float-button>
  </base-page>
</template>

<script>
export default {
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
    dueDate() {
      return new Date(this.task.dueDate).toLocaleString();
    },
    taskStatus() {
      const now = new Date().getTime();
      if (this.task.finished) {
        return "Finished";
      } else if (this.task.dueDate > now) {
        return "Active";
      } else {
        return "Missed";
      }
    },
    editTaskLink() {
      return {
        name: "task-edit",
        params: { taskId: this.task.id },
      };
    },
  },
};
</script>

<style scoped>
.field:not(:first-child) {
  margin: 0.8em 0;
}
.field > label {
  display: block;
  font-size: 1.5rem;
  color: var(--color-accent);
  font-weight: bold;
  padding-bottom: 0.25em;
}
.field > .value {
  font-size: 1.8rem;
  padding: 0.25rem 0.25rem 0.25rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
