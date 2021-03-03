<template>
  <div class="backdrop" v-if="isOpen" @click="$emit('close-drawer')"></div>
  <nav class="drawer" :class="{ closed: !isOpen }">
    <div class="brand">
      <h4 class="brand-name">Tasko</h4>
      <p class="tag-line">Go crazy with task management!</p>
      <button class="toggle" @click="$emit('close-drawer')">
        Close Drawer
      </button>
    </div>
    <ul class="menu">
      <li class="menu-heading">Task Categories</li>
      <li class="menu-item" @click="$emit('close-drawer')">
        <router-link
          :to="{
            name: 'category-tasks',
            params: { categoryId: defaultCategoryId },
          }"
        >
          <i class="fas fa-list-alt"></i> {{ defaultCategoryName }}
        </router-link>
      </li>
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
      <li class="menu-heading">Settings</li>
      <li class="menu-item-action">
        <button @click="$emit('manage-category')">
          <i class="fas fa-th-list"></i> Manage Categories
        </button>
      </li>
    </ul>
    <div class="user-info">
      <span>Hi! {{ userFullName }}</span>
      <base-button look="primary" @click="logOutUser">Log Out</base-button>
    </div>
  </nav>
</template>
<script>
export default {
  emits: ["close-drawer", "manage-category"],
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
  computed: {
    userFullName() {
      return this.$store.getters["account/userFullName"];
    },
    defaultCategoryId() {
      return this.$store.getters["category/defaultCategoryId"];
    },
    defaultCategoryName() {
      return this.$store.getters["category/defaultCategoryName"];
    },
  },
  methods: {
    async logOutUser() {
      await this.$store.dispatch("account/logout");
      this.$router.push({ name: "login" });
      this.$emit("close-drawer");
    },
  },
};
</script>
<style scoped>
.backdrop {
  z-index: var(--z-index-drawer);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.25);
  filter: blur(5px);
}
.drawer {
  position: fixed;
  z-index: var(--z-index-drawer);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr;
  color: var(--color-drawer-text);
  background-color: var(--color-drawer-surface);
  font-size: 1.8rem;
  overflow: hidden;
  transition: all 300ms ease;
}
.drawer.closed {
  transform: translateX(-100vw);
  opacity: 0;
}
.drawer > .brand {
  position: relative;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  margin: 0;
  padding: 0.5rem 1rem 0.5rem 2rem;
  background: var(--color-drawer-surface);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: var(--color-primary);
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}
.brand > .brand-name {
  margin: 0;
  padding: 0;
}
.brand > .tag-line {
  margin: 0.25em 0 0 0;
  font-size: 1.2rem;
  letter-spacing: 0;
  color: var(--color-surface-text);
  text-transform: none;
}
.brand > .toggle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 3em;
  height: 3em;
  margin: auto 0.5rem auto 0;
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
.brand > .toggle::after {
  position: absolute;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 2.5em;
  display: block;
  content: "\f137";
  text-indent: 0;
  top: 0em;
  left: 0em;
}
.drawer > .menu {
  list-style: none;
  padding: 0;
  margin: 0;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  overflow: auto;
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
  border-left: none;
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

.drawer > .user-info {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 1rem 1rem 1rem 2rem;
  background: var(--color-drawer-surface);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  color: var(--color-primary);
}
.drawer > .user-info > *:first-child {
  flex: 1 1 auto;
}

@supports (backdrop-filter: blur(8px)) {
  .drawer {
    background-color: transparent;
    backdrop-filter: blur(8px);
  }
}
</style>
