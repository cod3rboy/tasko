<template>
  <div class="flex-container" @click="$emit('item-click')">
    <base-checkbox
      :checked="isChecked"
      @check-change="checkChanged"
      @click.stop
    ></base-checkbox>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["selection-change", "item-click"],
  props: {
    isChecked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    checkChanged(isChecked) {
      this.$emit("selection-change", isChecked);
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.2em;
  padding: 0.5em;
  cursor: pointer;
}
.flex-container:active::after {
  /* Ripple pseudo element */
  display: block;
  content: " ";
  position: absolute;
  background-color: rgba(0, 0, 0, 0.05);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.flex-container > .content {
  flex: 1 1 auto;
}
</style>
