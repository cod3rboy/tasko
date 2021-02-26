<template>
  <router-link :to="link" custom v-slot="{ navigate, href }" v-if="hasLink">
    <a
      class="btn"
      :class="styleModifier"
      :style="inlineStyles"
      :href="href"
      @click="navigate"
    >
      <slot></slot>
    </a>
  </router-link>
  <button class="btn" :class="styleModifier" :style="inlineStyles" v-else>
    <slot></slot>
  </button>
</template>

<script>
const btnStyleModifiers = {
  primary: "btn--primary",
  accent: "btn--accent",
  secondary: "btn--secondary",
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
    link: {
      type: Object,
      required: false,
      default: null,
    },
    margin: {
      type: String,
      required: false,
      default: "0 0 0 0",
    },
  },
  computed: {
    styleModifier() {
      return this.styleModifiers[this.look];
    },
    hasLink() {
      return !!this.link && typeof this.link === "object";
    },
    inlineStyles() {
      return {
        margin: this.margin,
      };
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
  text-decoration: none;
  text-align: center;
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
.btn--secondary {
  background-color: var(--color-secondary-surface);
  color: var(--color-accent);
}
.btn:hover {
  filter: brightness(1.1);
}
.btn:active {
  filter: brightness(1.25);
}
</style>
