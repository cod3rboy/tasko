<template>
  <transition-group name="task" tag="ul">
    <task-list-item
      v-for="task in tasks"
      :key="task.id"
      :task-item="task"
      @item-click="openTaskItem"
    ></task-list-item>
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
      console.log(taskItem);
    },
  },
};
</script>

<style scoped>
ul {
  position: relative;
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
  position: absolute;
  min-width: 100%;
  transition: all 400ms ease-out 400ms;
}
.task-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
.task-move {
  transition: transform 400ms ease 400ms;
}
</style>
