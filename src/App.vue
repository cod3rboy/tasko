<template>
  <div class="container">
    <section class="header">
      <the-header
        @new-category="setNewCategoryDialogVisible(true)"
      ></the-header>
      <the-tabs></the-tabs>
    </section>
    <section class="main">
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
import TheTabs from "./components/layout/TheTabs.vue";
import NewCategory from "./components/tasks/NewCategory.vue";

export default {
  components: {
    TheHeader,
    NewCategory,
    TheTabs,
  },
  data() {
    return {
      showNewCategory: false,
    };
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
  --color-accent: #9020f0;
  --color-surface-text: #333;
  --color-primary-text: #fff;
  --color-accent-text: #fff;
  --z-index-dialog: 0;
  --z-index-fab: -1;
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
  overflow-x: hidden;
  overflow-y: auto;
  background: var(--color-surface);
  color: var(--color-surface-text);
}
section.container {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
}
section.header {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}
section.main {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
</style>
