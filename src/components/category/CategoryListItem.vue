<template>
  <base-card>
    <base-selectable-list-item
      @selection-change="selectionChange"
      @item-click="itemClicked"
    >
      {{ category.name }}
    </base-selectable-list-item>
  </base-card>
</template>

<script>
export default {
  emits: ["item-selected", "item-deselected", "item-click"],
  props: {
    category: {
      type: Object,
      required: true,
      default: null,
    },
  },
  methods: {
    selectionChange(isSelected) {
      if (isSelected) {
        this.$emit("item-selected", this.category);
      } else {
        this.$emit("item-deselected", this.category);
      }
    },
    itemClicked() {
      this.$emit("item-click", this.category);
    },
  },
};
</script>

<style scoped></style>
