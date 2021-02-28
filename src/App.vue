<template>
  <div class="container">
    <section class="header">
      <the-header
        :isOpen="isDrawerVisible"
        @menu-toggle="toggleNavMenu"
      ></the-header>
      <the-drawer
        :is-open="isDrawerVisible"
        :nav-categories="allCategories"
        @close-drawer="toggleNavMenu"
        @manage-category="manageCategories"
      ></the-drawer>
    </section>
    <section class="main">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </section>
  </div>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheDrawer from "./components/layout/TheDrawer.vue";

export default {
  components: {
    TheHeader,
    TheDrawer,
  },
  computed: {
    allCategories() {
      return this.$store.getters["category/categories"];
    },
    isDrawerVisible() {
      return this.$store.getters.isDrawerVisible;
    },
  },
  methods: {
    toggleNavMenu() {
      if (this.isDrawerVisible) {
        this.$store.dispatch("hideDrawer");
      } else {
        this.$store.dispatch("showDrawer");
      }
    },
    manageCategories() {
      this.$router.push({ name: "manage-categories" });
      this.toggleNavMenu();
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
  --color-overlay-background: rgba(0, 0, 0, 0.75);
  --color-overlay-text: #fff;
  --color-danger: #f33;
  --color-success: #3c3;
  --z-index-fab: 0;
  --z-index-drawer: 1;
  --z-index-dialog: 2;
  --z-index-loading-overlay: 3;
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
  overflow: hidden;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
/** Page transition Vuejs css classes */
.page-enter-from {
  transform: translateX(-100vw) scale(0.75);
}
.page-enter-active {
  transition: all 400ms ease-in;
}
.page-enter-to {
  transform: scale(1) translateX(0);
}
.page-leave-from {
  transform: scale(1) translateX(0);
}
.page-leave-active {
  transition: all 400ms ease-out;
}
.page-leave-to {
  transform: scale(0.75) translateX(100vw);
}
</style>
