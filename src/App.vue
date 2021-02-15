<template>
  <div class="container">
    <section class="header">
      <the-header
        :isOpen="navMenuVisible"
        @menu-toggle="toggleNavMenu"
      ></the-header>
    </section>
    <section class="main" :class="{ fixed: navMenuVisible }">
      <the-drawer
        :is-open="navMenuVisible"
        :nav-categories="allCategories"
        @close-drawer="toggleNavMenu"
        @new-category="setNewCategoryDialogVisible(true)"
      ></the-drawer>
      <router-view></router-view>
      <base-float-button
        icon-code="f067"
        alt-text="Add Task"
        @click="createNewTaskDialog"
      >
      </base-float-button>
      <new-category
        :show="showNewCategory"
        @save="saveCategory"
        @cancel="setNewCategoryDialogVisible(false)"
      ></new-category>
    </section>
  </div>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheDrawer from "./components/layout/TheDrawer.vue";
import NewCategory from "./components/tasks/NewCategory.vue";

export default {
  components: {
    TheHeader,
    NewCategory,
    TheDrawer,
  },
  data() {
    return {
      showNewCategory: false,
      navMenuVisible: false,
    };
  },
  computed: {
    allCategories() {
      return this.$store.getters["category/categories"];
    },
  },
  methods: {
    setNewCategoryDialogVisible(visible) {
      this.showNewCategory = visible;
    },
    saveCategory(categoryName) {
      this.$store.dispatch("category/createCategory", {
        category: categoryName,
      });
      this.setNewCategoryDialogVisible(false);
    },
    createNewTaskDialog() {
      alert("New Task");
    },
    toggleNavMenu() {
      this.navMenuVisible = !this.navMenuVisible;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend+Mega&display=swap");

/* CSS Resets */
:root {
  font-family: "PT Sans", sans-serif;
  /* CSS variables for colors */
  --color-primary: #ff6666;
  --color-surface: #eee;
  --color-secondary-surface: #fff;
  --color-drawer-surface: #fff;
  --color-accent: #9020f0;
  --color-surface-text: #333;
  --color-primary-text: #fff;
  --color-accent-text: #fff;
  --color-drawer-text: #666;
  --z-index-fab: 0;
  --z-index-drawer: 1;
  --z-index-dialog: 2;
}
* {
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}
html {
  font-size: 0.8em;
  font-weight: 400;
  -webkit-text-size-adjust: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lexend Mega", Arial, Helvetica, sans-serif;
}
body {
  margin: 0;
  background: var(--color-surface);
  color: var(--color-surface-text);
}
div.container {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
}
section.header {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}
section.main {
  position: relative;
  overflow: hidden auto;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
section.main.fixed {
  overflow: hidden;
}
</style>
