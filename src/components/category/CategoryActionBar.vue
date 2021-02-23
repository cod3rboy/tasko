<template>
  <base-actionbar>
    <template #action-text>{{ selectCount }} items selected</template>
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
        @click="actionDelete"
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
  computed: {
    showEditAction() {
      return this.selectCount === 1;
    },
  },
  methods: {
    actionEdit() {
      this.$emit("edit");
    },
    actionDelete() {
      this.$emit("delete");
    },
  },
};
</script>

<style scoped>
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
</style>
