<template>
  <button class="btn" :class="{ 'btn--primary': isPrimary }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isPrimary: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
  background-color: var(--color-surface);
  color: var(--color-surface-text);
  padding: 0.5em 1em;
  font-size: 1.2rem;
  border-radius: 0.25em;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in;
  text-transform: uppercase;
}
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-primary-text);
}
.btn:hover {
  filter: brightness(1.1);
}
.btn:active {
  filter: brightness(1.25);
}
</style>
