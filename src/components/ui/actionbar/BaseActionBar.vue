<template>
  <div class="actions">
    <base-action-item
      icon-code="f2ed"
      alt-text="Delete Category"
      background-color="var(--color-accent-text)"
      foreground-color="var(--color-accent)"
    ></base-action-item>
  </div>
</template>

<script>
import BaseActionItem from "./BaseActionItem.vue";
export default {
  components: {
    BaseActionItem,
  },
};
</script>

<style scoped>
.actions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  background-color: var(--color-accent);
  padding: 0.4rem;
}
</style>
