<template>
  <button
    class="action-item"
    :title="altText"
    :style="styleAttrs"
    @click="$emit('click')"
  >
    {{ altText }}
  </button>
</template>

<script>
export default {
  emits: ["click"],
  props: {
    altText: {
      type: String,
      required: true,
      default: "",
    },
    iconCode: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
    foregroundColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      if (this.iconCode.trim().length <= 0) return {};
      return { "--icon-code": '"\\' + this.iconCode + '"' };
    },
    background() {
      if (this.backgroundColor.length <= 0) return {};
      return { "--background-color": this.backgroundColor };
    },
    foreground() {
      if (this.backgroundColor.length <= 0) return {};
      return { "--foreground-color": this.foregroundColor };
    },
    styleAttrs() {
      return {
        ...this.icon,
        ...this.background,
        ...this.foreground,
      };
    },
  },
};
</script>

<style scoped>
.action-item {
  /* Default Styles */
  --icon-code: "\f128";
  --background-color: #fff;
  --foreground-color: #000;
  position: relative;
  border: none;
  border-radius: 5em;
  color: var(--foreground-color);
  background-color: var(--background-color);
  padding: 0;
  margin: 0 0.4rem;
  width: 2.5rem;
  height: 2.5rem;
  text-indent: 10em;
  outline: none;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
.action-item:active {
  filter: brightness(0.9);
}
.action-item::after {
  display: block;
  position: absolute;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: var(--icon-code);
  color: inherit;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 1.25rem;
  padding: 0.5rem;
  text-indent: 0;
}
</style>
