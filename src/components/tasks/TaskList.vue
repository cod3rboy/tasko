<template>
  <transition-group name="task" tag="ul">
    <li class="task-item" v-for="task in tasks" :key="task.id">
      <task-list-item
        :task-item="task"
        @item-click="openTaskItem"
      ></task-list-item>
    </li>
  </transition-group>
</template>

<script>
import TaskListItem from "./TaskListItem.vue";

export default {
  props: ["categoryId", "tasks"],
  components: {
    TaskListItem,
  },
  methods: {
    openTaskItem(taskItem) {
      this.$router.push({
        name: "task-detail",
        params: { taskId: taskItem.id },
      });
    },
  },
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 0.25em;
  padding: 0;
  font-size: 1.5rem;
  list-style: none;
  margin: 0.4em;
}
/* Vue css list item animation classes */
.task-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.task-leave-active {
  transition: all 300ms ease-out 300ms;
}
.task-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
</style>
