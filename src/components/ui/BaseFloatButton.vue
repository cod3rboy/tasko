<template>
  <router-link :to="link" custom v-slot="{ navigate, href }" v-if="hasLink">
    <a
      class="fab"
      :class="{ hide: !visible }"
      :style="icon"
      :href="href"
      @click="navigate"
    >
      {{ altText }}
    </a>
  </router-link>
  <button
    class="fab"
    :class="{ hide: !visible }"
    :style="icon"
    @click="$emit('click')"
    v-else
  >
    {{ altText }}
  </button>
</template>

<script>
export default {
  emits: ["click"],
  props: {
    iconCode: {
      required: true,
      validator: function (value) {
        const iconCodeRegex = new RegExp(/^[\da-f]{4}$/i);
        return (
          !!value && typeof value === "string" && iconCodeRegex.test(value)
        );
      },
    },
    altText: {
      type: String,
      required: true,
      default: "",
    },
    link: {
      type: Object,
      required: false,
      default: null,
    },
    visible: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    icon() {
      return {
        "--icon-code": "'\\" + this.iconCode + "'",
      };
    },
    hasLink() {
      return !!this.link && typeof this.link === "object";
    },
  },
};
</script>

<style scoped>
.fab {
  z-index: var(--z-index-fab);
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  right: 0;
  font-size: 1.5rem;
  margin-right: 1em;
  margin-bottom: 1em;
  border: none;
  background-color: var(--color-accent);
  color: var(--color-primary-text);
  width: 2.5em;
  height: 2.5em;
  border-radius: 10em;
  text-indent: -10em;
  overflow: hidden;
  outline: none;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 200ms ease;
}
.fab.hide {
  transform: scale(0);
}
.fab:hover {
  filter: brightness(1.2);
}
.fab:active {
  filter: brightness(1.4);
}
.fab::after {
  font-family: "Font Awesome 5 Free";
  align-self: center;
  font-weight: 900;
  text-align: center;
  content: var(--icon-code);
  position: absolute;
  text-indent: 0;
  left: 0;
  right: 0;
}
</style>
