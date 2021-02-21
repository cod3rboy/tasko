<template>
  <div class="card-container">
    <base-card padding="0">
      <base-selectable-list-item
        :is-checked="taskItem.finished"
        @item-click="$emit('item-click', taskItem)"
        @selection-change="setTaskStatus"
      >
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
          <div class="actions">
            <base-round-button
              icon-code="f304"
              theme="success"
              alt-text="Edit Task"
              :link="taskEditLink"
            ></base-round-button>
            <base-round-button
              icon-code="f2ed"
              theme="danger"
              alt-text="Delete Task"
              @click="setOverlayVisible(true)"
            ></base-round-button>
          </div>
        </div>
      </base-selectable-list-item>
    </base-card>
    <transition name="overlay">
      <div class="card-overlay" v-if="deleteConfirmOverlayVisible">
        <div class="message">Are you sure to delete this task?</div>
        <div class="overlay-actions">
          <base-round-button
            icon-code="f00c"
            theme="secondary"
            alt-text="Confirm Delete"
            @click="deleteTask"
          ></base-round-button>
          <base-round-button
            icon-code="f00d"
            theme="secondary"
            alt-text="Cancel Delete"
            @click="setOverlayVisible(false)"
          ></base-round-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  emits: ["item-click"],
  props: ["taskItem"],
  data() {
    return {
      deleteConfirmOverlayVisible: false,
    };
  },
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
    taskEditLink() {
      return {
        name: "task-edit",
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
    deleteTask() {
      const payload = { taskId: this.taskItem.id };
      this.$store.dispatch("task/deleteTask", payload);
    },
    setOverlayVisible(value) {
      this.deleteConfirmOverlayVisible = value;
    },
  },
};
</script>
<style scoped>
.card-container {
  position: relative;
}
.card-overlay {
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--color-overlay-background);
  color: var(--color-overlay-text);
  backdrop-filter: blur(6px);
}
.card-overlay .message {
  text-align: center;
}
.card-overlay .overlay-actions {
  display: flex;
  padding: 0.5em 1em;
  justify-content: space-around;
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
.detail .actions {
  display: flex;
}
.detail .actions > *:not(:first-child) {
  margin-left: 1em;
}
/** Overlay Vuejs transition classes */
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: all 400ms ease;
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
  transform: scaleY(1);
  transform-origin: top;
}
</style>
