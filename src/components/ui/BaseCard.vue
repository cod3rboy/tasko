<template>
  <div class="card" :style="cardStyles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    cardStyles() {
      const styles = {};
      if (this.padding !== "") styles["--card-padding"] = this.padding;
      // You can check for more custom css attribute styles
      return styles;
    },
  },
};
</script>

<style scoped>
.card {
  --card-padding: 0.5em;
  background-color: var(--color-secondary-surface);
  color: var(--color-surface-text);
  font-size: 1.6rem;
  padding: var(--card-padding);
  border-radius: 0.2em;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
