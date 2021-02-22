<template>
  <div class="action-bar">
    <div class="action-text">
      <slot name="action-text"></slot>
    </div>
    <div class="action-items">
      <slot name="action-items"></slot>
    </div>
  </div>
</template>

<style scoped>
.action-bar {
  display: flex;
  flex-flow: row nowrap;
  background-color: var(--color-accent);
  color: var(--color-accent-text);
  padding: 0.5rem 1rem;
}
.action-bar > .action-text {
  flex: 1 1 auto;
  font-size: 1.5rem;
  align-self: center;
}
.action-items > *:not(:first-child) {
  margin-left: 0.6rem;
}
</style>
