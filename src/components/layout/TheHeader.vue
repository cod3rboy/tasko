<template>
  <header class="page-header">
    <h1>Tasko</h1>
    <button
      class="toggle"
      :class="{ back: isOpen }"
      @click="toggleMenu"
      v-if="userHasLoggedIn"
    >
      Menu
    </button>
  </header>
</template>

<script>
export default {
  emits: ["menu-toggle"],
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    userHasLoggedIn() {
      return this.$store.getters["account/userLoggedIn"];
    },
  },
  methods: {
    toggleMenu() {
      this.$emit("menu-toggle");
    },
  },
};
</script>

<style scoped>
.page-header {
  display: flex;
  color: var(--color-primary-text);
  position: relative;
  flex-flow: row nowrap;
  background-color: var(--color-primary);
  padding: 1em;
}

.page-header > h1 {
  letter-spacing: 0.5rem;
  flex: 1 1 0%;
  text-transform: uppercase;
  margin: 0;
}
.page-header > .toggle {
  position: relative;
  width: 2em;
  height: 2em;
  color: inherit;
  text-indent: 5em;
  background-color: transparent;
  border: none;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  padding: 0em;
}
.page-header > .toggle::after {
  position: absolute;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 2em;
  display: block;
  content: "\f0c9";
  text-indent: 0;
  top: 0em;
  left: 0em;
}
</style>
