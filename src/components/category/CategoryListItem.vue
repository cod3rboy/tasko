<template>
  <base-card padding="0">
    <base-selectable-list-item
      :is-checked="selected"
      @selection-change="selectionChange"
      @item-click="itemClicked"
    >
      {{ category.name }}
      <template #actions>
        <div class="actions" v-if="showMoveActions">
          <base-round-button
            icon-code="f062"
            alt-text="Move Up"
            @click="itemMoveUp"
          ></base-round-button>
          <base-round-button
            icon-code="f063"
            alt-text="Move Down"
            @click="itemMoveDown"
          ></base-round-button>
        </div>
      </template>
    </base-selectable-list-item>
  </base-card>
</template>

<script>
export default {
  emits: [
    "item-selected",
    "item-deselected",
    "item-click",
    "item-move-up",
    "item-move-down",
  ],
  props: {
    category: {
      type: Object,
      required: true,
      default: null,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
    showMoveActions: {
      type: Boolean,
      required: false,
      default: false,
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
    itemMoveUp() {
      this.$emit("item-move-up", this.category);
    },
    itemMoveDown() {
      this.$emit("item-move-down", this.category);
    },
  },
};
</script>

<style scoped>
.actions {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
}
.actions > *:not(:last-child) {
  margin-bottom: 1em;
}
</style>
