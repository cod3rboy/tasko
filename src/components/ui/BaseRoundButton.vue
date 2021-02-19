<template>
  <router-link :to="link" custom v-slot="{ navigate, href }" v-if="hasLink">
    <a
      class="round-btn"
      :style="inlineStyles"
      :href="href"
      @click.stop="navigate"
    >
      {{ altText }}
    </a>
  </router-link>
  <button
    class="round-btn"
    :style="inlineStyles"
    @click.stop="$emit('click')"
    v-else
  >
    {{ altText }}
  </button>
</template>

<script>
const btnThemes = {
  primary: {
    "--theme-bg-color": "var(--color-primary)",
    "--theme-icon-color": "var(--color-primary-text)",
  },
  danger: {
    "--theme-bg-color": "var(--color-danger)",
    "--theme-icon-color": "var(--color-primary-text)",
  },
  secondary: {
    "--theme-bg-color": "var(--color-surface)",
    "--theme-icon-color": "var(--color-surface-text)",
  },
  accent: {
    "--theme-bg-color": "var(--color-accent)",
    "--theme-icon-color": "var(--color-accent-text)",
  },
  success: {
    "--theme-bg-color": "var(--color-success)",
    "--theme-icon-color": "var(--color-primary-text)",
  },
};
const defaultTheme = "secondary";

export default {
  emits: ["click"],
  props: {
    theme: {
      type: String,
      required: false,
      default: defaultTheme,
      validator: (value) => {
        return !!btnThemes[value];
      },
    },
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
  },
  computed: {
    inlineStyles() {
      return {
        "--icon-code": "'\\" + this.iconCode + "'",
        ...btnThemes[this.theme],
      };
    },
    hasLink() {
      return !!this.link && typeof this.link === "object";
    },
  },
};
</script>

<style scoped>
.round-btn {
  position: relative;
  display: flex;
  font-size: 1rem;
  border: none;
  background-color: var(--theme-bg-color);
  color: var(--theme-icon-color);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10em;
  text-indent: -10em;
  overflow: hidden;
  outline: none;
  cursor: pointer;
}
.round-btn::after {
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
