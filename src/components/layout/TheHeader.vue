<template>
  <header class="page-header">
    <button class="toggle" :class="{ back: menuVisible }" @click="toggleMenu">
      Menu
    </button>
    <h1>Tasko</h1>
  </header>
</template>

<script>
export default {
  emits: ["new-category"],
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    newCategory() {
      this.menuVisible = false;
      this.$emit("new-category");
    },
  },
  computed: {
    categories() {
      return this.$store.getters["category/categories"];
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
  padding: 0.5em;
}

.page-header > h1 {
  letter-spacing: 0.5rem;
  text-align: center;
  flex: 1 1 0%;
  text-transform: uppercase;
  margin: 0;
}
.page-header > .toggle {
  position: relative;
  width: 2em;
  height: 2em;
  flex: 0 0 inherit;
  color: inherit;
  text-indent: 5em;
  background-color: transparent;
  border: none;
  overflow: hidden;
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
.page-header > .toggle.back::after {
  content: "\f060";
}
</style>
