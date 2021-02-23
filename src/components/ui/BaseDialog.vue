<template>
  <teleport to="body">
    <div class="backdrop" @click="close" v-if="show"></div>
    <transition>
      <dialog class="main" open v-if="show">
        <button class="close" @click="close">Close</button>
        <h2 class="title"><slot name="header">Title</slot></h2>
        <div class="body">
          <slot></slot>
        </div>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  emits: ["dialog-close"],
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("dialog-close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  z-index: var(--z-index-dialog);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}
dialog {
  border: none;
  background-color: transparent;
}
.main {
  z-index: var(--z-index-dialog);
  position: fixed;
  background-color: var(--color-secondary-surface);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  font-size: 1.2rem;
  border-radius: 0.25em;
  padding: 1em;
  width: 90%;
  top: 30%;
}
.close {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  border: 0;
  background-color: transparent;
  width: 2em;
  height: 2em;
  overflow: hidden;
  text-indent: 5em;
  outline: none;
}
.close::after {
  position: absolute;
  display: block;
  color: var(--color-surface-text);
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f00d";
  text-indent: 0;
  font-size: 1.5em;
  width: 100%;
  text-align: center;
  height: 100%;
  top: 0;
  left: 0;
}
.main .title {
  color: var(--color-primary);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5em;
  margin: 0;
  font-size: inherit;
}
.main .body {
  margin: 1em 0;
}
.main .actions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

/* Vue transition CSS classes */
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-1em);
}
.v-enter-active {
  transition: all 0.3s ease-in;
}
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
