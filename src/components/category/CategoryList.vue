<template>
  <ul>
    <li class="category-item" v-for="category in categories" :key="category.id">
      <category-list-item
        :category="category"
        :selected="selectedCategories.includes(category.id)"
        :show-move-actions="shouldShowItemMoveActions"
        @item-selected="itemSelected"
        @item-deselected="itemDeselected"
        @item-click="itemClicked"
        @item-move-up="moveItemUp"
        @item-move-down="moveItemDown"
      ></category-list-item>
    </li>
  </ul>
</template>

<script>
import CategoryListItem from "./CategoryListItem.vue";
export default {
  emits: [
    "category-selected",
    "category-deselected",
    "category-clicked",
    "move-category-up",
    "move-category-down",
  ],
  components: {
    CategoryListItem,
  },
  props: {
    categories: {
      type: Array,
      required: true,
      default: [],
    },
    selectedCategories: {
      type: Array,
      required: true,
      default: [],
    },
  },
  computed: {
    shouldShowItemMoveActions() {
      return this.selectedCategories.length > 0;
    },
  },
  methods: {
    itemSelected(category) {
      this.$emit("category-selected", category);
    },
    itemDeselected(category) {
      this.$emit("category-deselected", category);
    },
    itemClicked(category) {
      this.$emit("category-clicked", category);
    },
    moveItemUp(category) {
      this.$emit("move-category-up", category);
    },
    moveItemDown(category) {
      this.$emit("move-category-down", category);
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
}
.category-item {
  position: relative;
}
.category-item:not(:last-child) {
  margin-bottom: 0.5em;
}
</style>
