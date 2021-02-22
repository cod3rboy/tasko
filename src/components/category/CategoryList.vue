<template>
  <ul>
    <li class="category-item" v-for="category in categories" :key="category.id">
      <category-list-item
        :category="category"
        @item-selected="itemSelected"
        @item-deselected="itemDeselected"
      ></category-list-item>
    </li>
  </ul>
</template>

<script>
import CategoryListItem from "./CategoryListItem.vue";
export default {
  emits: ["category-selected", "category-deselected"],
  components: {
    CategoryListItem,
  },
  props: {
    categories: {
      type: Array,
      required: true,
      default: [],
    },
  },
  methods: {
    itemSelected(category) {
      this.$emit("category-selected", category);
    },
    itemDeselected(category) {
      this.$emit("category-deselected", category);
    },
  },
};
</script>
<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 0.6em;
  list-style: none;
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  max-height: 100%;
  overflow: hidden auto;
}
.category-item {
  position: relative;
  margin: 0 0.5em;
}
</style>
