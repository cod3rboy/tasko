<template>
  <header class="page-header">
    <h1>Tasko</h1>
    <button class="toggle" :class="{ back: menuVisible }" @click="toggleMenu">
      Menu
    </button>
    <transition name="nav">
      <nav v-if="menuVisible">
        <ul class="menu">
          <li><a href="#">Menu Item 1</a></li>
          <li><a href="#">Menu Item 2</a></li>
          <li><a href="#">Menu Item 3</a></li>
          <li><a href="#">Menu Item 4</a></li>
          <li><a href="#">Menu Item 5</a></li>
          <li><a href="#">Menu Item 6</a></li>
          <li><a href="#">Menu Item 7</a></li>
          <li><button>New Task List</button></li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style scoped>
.page-header {
  color: var(--color-primary-text);
  position: relative;
}
.page-header > h1 {
  letter-spacing: 0.5rem;
  padding: 0.25em;

  background-color: var(--color-primary);
  text-align: center;
  text-transform: uppercase;
  margin: 0;
}
.page-header > .toggle {
  position: absolute;
  top: 0.5em;
  left: 1em;
  width: 2em;
  height: 2em;
  padding: 0;
  color: inherit;
  text-indent: 5em;
  background-color: transparent;
  border: none;
  overflow: hidden;
  white-space: nowrap;
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
nav {
  font-size: 1.5rem;
  background-color: var(--color-primary);
  border-bottom-left-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  filter: brightness(115%);
}
nav > .menu {
  list-style: none;
  padding: 0.5em 0;
  text-align: center;
  margin: 0;
}

nav > .menu a {
  display: block;
  padding: 0.5em;
  color: inherit;
  text-decoration: none;
}
nav > .menu > li:first-child a {
  padding-top: 0;
}
nav > .menu button {
  border: none;
  background-color: inherit;
  color: inherit;
  font-size: 1em;
  padding: 0.5em 1em;
  background-color: rgba(255, 255, 255, 0.1);
}
/* Transition Classes */
.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateY(-0.5em);
}
.nav-enter-active,
.nav-leave-active {
  transition: all 400ms ease-in;
}
.nav-enter-to,
.nav-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
