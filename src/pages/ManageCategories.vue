<template>
  <div class="container">
    <div class="action-bar">
      <base-actionbar></base-actionbar>
    </div>
    <div class="list">
      <category-list
        :categories="categories"
        @category-selected="addCategoryToSelection"
        @category-deselected="removeCategoryFromSelection"
      ></category-list>
    </div>
  </div>
</template>

<script>
import CategoryList from "../components/category/CategoryList.vue";

export default {
  components: {
    CategoryList,
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
  },
  methods: {
    addCategoryToSelection(category) {
      this.selectedItems.push(category.id);
      console.log(this.selectedItems);
    },
    removeCategoryFromSelection(category) {
      const index = this.selectedItems.find((c) => c.id === category.id);
      this.selectedItems.splice(index, 1);
      console.log(this.selectedItems);
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
</style>
