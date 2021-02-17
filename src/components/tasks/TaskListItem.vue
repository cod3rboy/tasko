<template>
  <li>
    <base-card padding="0">
      <div class="flex-container" @click="$emit('item-click', taskItem)">
        <base-checkbox
          :checked="taskItem.finished"
          @check-change="setTaskStatus"
          @click.stop
        ></base-checkbox>
        <div class="detail">
          <router-link :to="taskDetailLink" custom v-slot="{ navigate, href }">
            <a
              class="title"
              :class="{ strikethrough: taskItem.finished }"
              :href="href"
              @click="navigate"
              >{{ taskItem.title }}</a
            >
          </router-link>
          <div class="date">Due Date : {{ dueDate }}</div>
        </div>
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  emits: ["item-click"],
  props: ["taskItem"],
  computed: {
    dueDate() {
      return new Date(this.taskItem.dueDate).toLocaleString();
    },
    taskDetailLink() {
      return {
        name: "task-detail",
        params: { taskId: this.taskItem.id },
      };
    },
  },
  methods: {
    setTaskStatus(taskFinished) {
      const payload = { taskId: this.taskItem.id };
      if (taskFinished) this.$store.dispatch("task/markFinished", payload);
      else this.$store.dispatch("task/markActive", payload);
    },
  },
};
</script>
<style scoped>
.flex-container {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.2em;
  padding: 0.5em;
  cursor: pointer;
}
.flex-container:active::after {
  /* Ripple pseudo element */
  display: block;
  content: " ";
  position: absolute;
  background-color: rgba(0, 0, 0, 0.05);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.flex-container > .detail {
  flex: 1 1 auto;
  outline: none;
}
.detail .title {
  color: var(--color-accent);
  text-decoration: none;
}
.detail .title.strikethrough {
  text-decoration: line-through;
}
.detail .date {
  color: var(--color-surface-text);
  font-size: 0.6em;
  margin: 0.5em 0;
}
</style>
