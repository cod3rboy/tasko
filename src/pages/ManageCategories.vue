<template>
  <div class="card-container">
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters["category/categories"];
    },
  },
};
</script>
