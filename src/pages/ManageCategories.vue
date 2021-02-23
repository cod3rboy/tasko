<template>
  <div class="container">
    <transition name="actionbar">
      <category-action-bar
        :select-count="selectedItemsCount"
        @edit="editSelectedItem"
        @delete="deleteSelectedItems"
        @select-all="selectAllItems"
        @cancel="cancelSelection"
        v-if="shouldShowActionBar"
      ></category-action-bar>
    </transition>
    <div class="list">
      <category-list
        :categories="categories"
        :selected-categories="selectedItems"
        @category-selected="addCategoryToSelection"
        @category-deselected="removeCategoryFromSelection"
        @category-clicked="toggleCategorySelection"
      ></category-list>
    </div>
  </div>
</template>

<script>
import CategoryList from "../components/category/CategoryList.vue";
import CategoryActionBar from "../components/category/CategoryActionBar.vue";

export default {
  components: {
    CategoryList,
    CategoryActionBar,
  },
  data() {
    return {
      selectedItems: [],
    };
  },
  computed: {
    categories() {
      return this.$store.getters["category/categories"];
    },
    selectedItemsCount() {
      return this.selectedItems.length;
    },
    shouldShowActionBar() {
      return this.selectedItems.length > 0;
    },
  },
  methods: {
    addCategoryToSelection(category) {
      this.selectedItems.push(category.id);
    },
    removeCategoryFromSelection(category) {
      const index = this.selectedItems.findIndex(
        (catId) => catId === category.id
      );
      this.selectedItems.splice(index, 1);
    },
    toggleCategorySelection(category) {
      const index = this.selectedItems.findIndex(
        (catId) => catId === category.id
      );
      if (index >= 0) {
        this.selectedItems.splice(index, 1);
      } else {
        this.selectedItems.push(category.id);
      }
    },
    editSelectedItem() {},
    deleteSelectedItems() {
      for (let catId of this.selectedItems) {
        this.$store.dispatch("category/deleteCategory", { categoryId: catId });
      }
      this.selectedItems.length = 0;
    },
    selectAllItems() {
      this.selectedItems.length = 0;
      for (let category of this.categories)
        this.selectedItems.push(category.id);
    },
    cancelSelection() {
      this.selectedItems.length = 0;
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}
.list {
  padding: 1rem;
  overflow: hidden auto;
}
/* Vuejs transitions classes for actionbar */
.actionbar-enter-from,
.actionbar-leave-to {
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
}
.actionbar-enter-active,
.actionbar-leave-active {
  transition: all 300ms ease;
}
.actionbar-enter-to,
.actionbar-leave-from {
  transform: scaleY(1);
  transform-origin: top;
  opacity: 1;
}
</style>
