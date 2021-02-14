<template>
  <div class="backdrop" v-if="isOpen"></div>
  <nav class="drawer" :class="{ closed: !isOpen }">
    <ul class="menu">
      <li class="menu-item"><a href="#">Menu Item 1</a></li>
      <li class="menu-item"><a href="#">Menu Item 2</a></li>
      <li class="menu-item"><a href="#">Menu Item 3</a></li>
      <li class="menu-item"><a href="#">Menu Item 4</a></li>
      <li class="menu-item"><a href="#">Menu Item 5</a></li>
      <li class="menu-item"><a href="#">Menu Item 6</a></li>
      <li class="menu-item"><a href="#">Menu Item 7</a></li>
      <li class="menu-item"><a href="#">Menu Item 8</a></li>
      <li class="menu-item"><a href="#">Menu Item 9</a></li>
      <li class="menu-item"><a href="#">Menu Item 10</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
    navLinks: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>
<style scoped>
.backdrop {
  z-index: var(--z-index-drawer);
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
}
.drawer {
  position: absolute;
  z-index: var(--z-index-drawer);
  height: 100%;
  min-width: 75%;
  max-width: auto;
  color: var(--color-drawer-text);
  background-color: var(--color-drawer-surface);
  font-size: 1.8rem;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 300ms ease;
}
.drawer.closed {
  transform: translateX(-100vw);
  opacity: 0;
}
.drawer > .menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-item {
  padding-right: 1em;
}
.menu-item:not(:last-child)::after {
  display: block;
  width: 80%;
  margin: 0 1em;
  height: 1px;
  content: " ";
  background-color: rgba(0, 0, 0, 0.1);
}
.menu-item > a {
  display: block;
  overflow-wrap: break-word;
  color: var(--color-drawer-text);
  width: 100%;
  height: fit-content;
  padding: 0.5em 0.25em 0.5em 1em;
  text-decoration: none;
}
.menu-item > a:hover,
.menu-item > a:active {
  background-color: var(--color-primary);
  color: var(--color-primary-text);
  border-top-right-radius: 10em;
  border-bottom-right-radius: 10em;
}
.menu-item > a:hover {
  filter: brightness(1.2);
}
.menu-item > a:active {
  filter: brightness(1.4);
}
</style>
