<template>
  <the-header @new-category="setNewCategoryDialogVisible(true)"></the-header>
  <new-category
    :show="showNewCategory"
    @save="saveCategory"
    @cancel="setNewCategoryDialogVisible(false)"
  ></new-category>
  <router-view></router-view>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import NewCategory from "./components/tasks/NewCategory.vue";

export default {
  components: {
    TheHeader,
    NewCategory,
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
</style>
