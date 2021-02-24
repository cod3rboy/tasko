<template>
  <div class="actionbar-wrapper">
    <base-actionbar>
      <template #action-text>{{ actionText }}</template>
      <template #action-items>
        <base-action-item
          icon-code="f304"
          alt-text="Edit Category"
          background-color="var(--color-secondary-surface)"
          foreground-color="var(--color-accent)"
          @click="actionEdit"
          v-if="showEditAction"
        ></base-action-item>
        <base-action-item
          icon-code="f2ed"
          alt-text="Delete Category"
          background-color="var(--color-secondary-surface)"
          foreground-color="var(--color-accent)"
          @click="showOverlay"
        ></base-action-item>
      </template>
      <ul class="actionbar__bottom">
        <li class="bottom-item">
          <button @click="$emit('select-all')">Select all</button>
        </li>
        <li class="bottom-item">
          <button @click="$emit('cancel')">Cancel</button>
        </li>
      </ul>
    </base-actionbar>
    <transition name="overlay">
      <div class="confirm-overlay" v-if="overlayVisible">
        <div class="message">Are you sure to delete selection?</div>
        <div class="overlay-actions">
          <base-round-button
            icon-code="f00c"
            theme="secondary"
            alt-text="Confirm"
            @click="actionDelete"
          ></base-round-button>
          <base-round-button
            icon-code="f00d"
            theme="secondary"
            alt-text="Cancel"
            @click="hideOverlay"
          ></base-round-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  emits: ["edit", "delete", "select-all", "cancel"],
  props: {
    selectCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      overlayVisible: false,
    };
  },
  computed: {
    showEditAction() {
      return this.selectCount === 1;
    },
    actionText() {
      const segments = [];
      segments.push(this.selectCount);
      segments.push(this.selectCount > 1 ? "categories" : "category");
      segments.push("selected");
      return segments.join(" ");
    },
  },
  methods: {
    actionEdit() {
      this.$emit("edit");
    },
    actionDelete() {
      this.$emit("delete");
      this.hideOverlay();
    },
    showOverlay() {
      this.overlayVisible = true;
    },
    hideOverlay() {
      this.overlayVisible = false;
    },
  },
};
</script>

<style scoped>
.actionbar-wrapper {
  position: relative;
}
.confirm-overlay {
  position: absolute;
  font-size: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  color: var(--color-primary-text);
  backdrop-filter: blur(4px);
}
.confirm-overlay .message {
  text-align: center;
}
.confirm-overlay .overlay-actions {
  display: flex;
  padding: 0.5em 1em;
  justify-content: space-around;
}
.actionbar__bottom {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  margin: 0;
  list-style-type: none;
  padding: 0;
  background-color: var(--color-secondary-surface);
  color: var(--color-accent);
}
.actionbar__bottom .bottom-item > button {
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  outline: none;
  color: var(--color-accent);
  cursor: pointer;
  padding: 0.8rem 1rem;
}
.actionbar__bottom .bottom-item > button:active {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10em;
}
/** Overlay Vuejs transition classes */
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: bottom;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: all 400ms ease;
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
  transform: scaleY(1);
  transform-origin: bottom;
}
</style>
