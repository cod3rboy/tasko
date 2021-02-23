<template>
  <label class="checkbox">
    <span class="checkbox__input">
      <input
        type="checkbox"
        name="checkbox"
        v-model="checkState"
        @change="checkChanged"
      />
      <span class="checkbox__control">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            d="M1.73 12.91l6.37 6.37L22.79 4.59"
          />
        </svg>
      </span>
    </span>
    <span class="radio__label" v-if="labelExists">{{ label }}</span>
  </label>
</template>

<script>
export default {
  emits: ["check-change"],
  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      checkState: this.checked,
    };
  },
  computed: {
    labelExists() {
      return (
        !!this.label &&
        typeof this.label === "string" &&
        this.label.trim() !== ""
      );
    },
  },
  watch: {
    checked() {
      this.checkState = this.checked;
    },
  },
  methods: {
    checkChanged() {
      this.$emit("check-change", this.checkState);
    },
  },
};
</script>

<style scoped>
.checkbox {
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 1.5rem;
  color: var(--color-accent);
}
.checkbox__input input {
  opacity: 0;
  width: 1em;
  height: 1em;
}
.checkbox__control {
  display: inline-grid;
  width: 1.2em;
  height: 1.2em;
  border-radius: 5em;
  padding: 0.15em;
  border: 0.1em solid currentColor;
}
.checkbox__input {
  display: grid;
  grid-template-areas: "checkbox";
}
.checkbox__input > * {
  grid-area: checkbox;
  align-self: center;
}
.checkbox__control svg {
  transition: transform 0.1s ease-in 25ms;
  transform: scale(0);
  transform-origin: bottom left;
}
.checkbox__input input:checked + .checkbox__control svg {
  transform: scale(1);
}
.checkbox__input input:focus + .checkbox__control {
  box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
}
.checkbox__input input[type="checkbox"]:disabled + .checkbox__control {
  color: rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
