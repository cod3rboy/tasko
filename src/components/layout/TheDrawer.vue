<template>
  <div class="backdrop" v-if="isOpen" @click="$emit('close-drawer')"></div>
  <nav class="drawer" :class="{ closed: !isOpen }">
    <ul class="menu">
      <li class="menu-heading">New Category</li>
      <li class="menu-item-action">
        <button @click="$emit('new-category')">
          <i class="fas fa-plus-square"></i> Create New
        </button>
      </li>
      <li class="menu-heading">Task Categories</li>
      <li
        class="menu-item"
        v-for="category in navCategories"
        :key="category.id"
        @click="$emit('close-drawer')"
      >
        <router-link
          :to="{ name: 'category-tasks', params: { categoryId: category.id } }"
        >
          <i class="fas fa-list-alt"></i> {{ category.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  emits: ["close-drawer", "new-category"],
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
    navCategories: {
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
.menu-heading {
  display: block;
  overflow-wrap: break-word;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  width: 100%;
  padding: 1rem 1.5rem 0.2rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
}
.menu-item,
.menu-item-action {
  padding-right: 1.5rem;
}
.menu > .menu-item {
  margin: 0.5rem 0em;
}
.menu-item > a {
  display: block;
  position: relative;
  overflow-wrap: break-word;
  color: var(--color-drawer-text);
  width: 100%;
  height: fit-content;
  padding: 0.8rem 0 0.8rem 2rem;
  text-decoration: none;
  border-top-right-radius: 10em;
  border-bottom-right-radius: 10em;
  transition: all 300ms ease;
}
.menu-item > .router-link-active {
  /* Router link state CSS class */
  background-color: var(--color-primary);
  color: var(--color-primary-text);
}
.menu-item > a:not(.router-link-active)::after {
  display: block;
  position: absolute;
  content: " ";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 0.08em solid var(--color-primary);
  border-top-right-radius: 10em;
  border-bottom-right-radius: 10em;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 300ms ease;
}
.menu-item > a:not(.router-link-active):hover::after,
.menu-item > a:not(.router-link-active):active::after {
  transform: scaleX(1);
}
.menu-item > a:hover {
  filter: brightness(1.2);
}
.menu-item > a:active {
  filter: brightness(1.4);
}
.menu-item-action > button {
  display: block;
  color: var(--color-drawer-text);
  width: 100%;
  padding: 0.8rem 0 0.8rem 2rem;
  border: none;
  font-size: inherit;
  background-color: transparent;
  margin-right: 1.5rem;
  text-decoration: none;
  text-align: left;
  outline: none;
  cursor: pointer;
}
.menu-item-action::after {
  display: block;
  width: 80%;
  margin: 0 2rem;
  height: 5px;
  content: " ";
  background-color: var(--color-primary);
  transition: transform 300ms ease;
  transform: scaleX(0);
  transform-origin: left;
}
.menu-item-action:hover > button {
  color: var(--color-accent);
}
.menu-item-action:hover::after {
  transform: scaleX(1);
}
</style>
