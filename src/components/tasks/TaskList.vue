<template>
  <div class="empty-content" v-if="listEmpty">
    <img class="img-responsive" src="/panda.svg" alt="Panda with task list" />
    <h1 class="heading">Empty!</h1>
    <p class="sub-heading">{{ emptyMessage }}</p>
  </div>
  <transition-group name="task" tag="ul" v-else>
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
  props: ["categoryId", "tasks", "emptyMessage"],
  components: {
    TaskListItem,
  },
  computed: {
    listEmpty() {
      return this.tasks.length <= 0;
    },
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
.empty-content {
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  min-width: 100%;
  min-height: 100%;
  justify-content: center;
  font-size: 1.4rem;
}
.empty-content > *:not(:first-child) {
  margin-top: 1em;
}
.heading {
  margin: inherit;
  color: var(--color-accent);
}
.sub-heading {
  margin: inherit;
}
.img-responsive {
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  height: auto;
  filter: grayscale(100%);
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
