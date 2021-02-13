<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--color-secondary-surface);
  color: var(--color-surface-text);
  font-size: 1.6rem;
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 0.2em;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
