<template>
  <category-list
    :categories="categories"
    @category-selected="addCategoryToSelection"
    @category-deselected="removeCategoryFromSelection"
  ></category-list>
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
