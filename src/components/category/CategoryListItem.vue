<template>
  <base-card>
    <base-selectable-list-item>
      {{ category.name }}
    </base-selectable-list-item>
  </base-card>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
      default: null,
    },
  },
};
</script>

<style scoped></style>
