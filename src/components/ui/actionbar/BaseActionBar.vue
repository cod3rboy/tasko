<template>
  <div class="actionbar">
    <div class="action-bar__content">
      <div class="action-text">
        <slot name="action-text"></slot>
      </div>
      <div class="action-items">
        <slot name="action-items"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.action-bar__content {
  display: flex;
  flex-flow: row nowrap;
  background-color: var(--color-accent);
  color: var(--color-accent-text);
  padding: 0.8rem 1rem;
}
.action-bar__content > .action-text {
  flex: 1 1 auto;
  font-size: 1.5rem;
  align-self: center;
}
</style>
