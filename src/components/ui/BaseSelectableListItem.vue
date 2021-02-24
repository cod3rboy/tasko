<template>
  <div class="flex-container" @click="itemClicked">
    <base-checkbox
      :checked="itemChecked"
      @check-change="checkChanged"
      @click.stop
    ></base-checkbox>
    <div class="content">
      <slot></slot>
    </div>
    <slot name="actions"></slot>
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
  data() {
    return {
      itemChecked: this.isChecked,
    };
  },
  watch: {
    isChecked() {
      this.itemChecked = this.isChecked;
    },
  },
  methods: {
    checkChanged(checked) {
      this.itemChecked = checked;
      this.$emit("selection-change", this.itemChecked);
    },
    itemClicked() {
      this.itemChecked = !this.itemChecked;
      this.$emit("item-click");
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
