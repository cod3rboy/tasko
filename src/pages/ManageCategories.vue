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
        @move-category-up="moveCategoryUp"
        @move-category-down="moveCategoryDown"
      ></category-list>
    </div>
    <base-float-button
      icon-code="f067"
      alt-text="Create new category"
      :visible="!shouldShowActionBar"
      @click="openDialog"
    ></base-float-button>
    <category-dialog
      :show="showDialog"
      :category="categoryToEdit"
      @save="saveCategory"
      @dismiss="closeDialog"
    ></category-dialog>
  </div>
</template>

<script>
import CategoryList from "../components/category/CategoryList.vue";
import CategoryActionBar from "../components/category/CategoryActionBar.vue";
import CategoryDialog from "../components/category/CategoryDialog.vue";

export default {
  components: {
    CategoryList,
    CategoryActionBar,
    CategoryDialog,
  },
  data() {
    return {
      selectedItems: [],
      showDialog: false,
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
    categoryToEdit() {
      if (this.selectedItemsCount === 1) {
        const categoryId = this.selectedItems[0];
        return this.categories.find((c) => c.id === categoryId);
      }
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
    editSelectedItem() {
      this.openDialog();
    },
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
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
      this.cancelSelection();
    },
    saveCategory(category) {
      if (!!category.id) {
        this.$store.dispatch("category/saveCategory", category);
      } else {
        this.$store.dispatch("category/createCategory", {
          category: category.name,
        });
      }
      this.closeDialog();
      this.cancelSelection();
    },
    moveCategoryUp(category) {
      const index = this.categories.findIndex((c) => c.id === category.id);
      if (index >= 0) {
        this.$store.dispatch("category/moveCategoryUp", {
          categoryIndex: index,
        });
      }
    },
    moveCategoryDown(category) {
      const index = this.categories.findIndex((c) => c.id === category.id);
      if (index >= 0) {
        this.$store.dispatch("category/moveCategoryDown", {
          categoryIndex: index,
        });
      }
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
