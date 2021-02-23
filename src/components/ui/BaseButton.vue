<template>
  <button class="btn" :class="styleModifier">
    <slot></slot>
  </button>
</template>

<script>
const btnStyleModifiers = {
  primary: "btn--primary",
  accent: "btn--accent",
  secondary: "",
};
export default {
  props: {
    look: {
      type: String,
      required: false,
      default: "primary",
      validator: (value) => {
        const btnModifier = value.trim().toLowerCase();
        return btnModifier in btnStyleModifiers;
      },
    },
  },
  computed: {
    styleModifier() {
      return this.styleModifiers[this.look];
    },
  },
  data() {
    return {
      styleModifiers: btnStyleModifiers,
    };
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
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in;
  text-transform: uppercase;
  outline: none;
}
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-primary-text);
}
.btn--accent {
  background-color: var(--color-accent);
  color: var(--color-accent-text);
}
.btn:hover {
  filter: brightness(1.1);
}
.btn:active {
  filter: brightness(1.25);
}
</style>
