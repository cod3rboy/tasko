<template>
  <div class="form-control" :class="{ invalid: hasError }">
    <label :for="controlId">{{ label }}</label>
    <slot></slot>
    <p class="invalid-message" v-if="hasError">{{ invalidMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    hasError: {
      type: Boolean,
      required: false,
      default: false,
    },
    invalidMessage: {
      type: String,
      required: true,
      default: "Invalid value",
    },
    label: {
      type: String,
      required: true,
    },
    controlId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.form-control {
  font-size: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
}
.form-control:not(:first-child) {
  margin: 1em 0 0 0;
}
.form-control > *:not(:first-child) {
  margin-top: 0.25em;
}
.form-control > label {
  font-weight: bold;
  color: var(--color-accent);
}
.form-control > input,
.form-control > textarea {
  font-size: inherit;
  font-family: inherit;
  outline: none;
  padding: 0.25em;
  resize: none;
  border: 1px solid var(--color-accent);
}

.form-control.invalid > label {
  color: var(--color-danger);
}
.form-control.invalid > input,
.form-control.invalid > textarea {
  border-color: var(--color-danger);
}
.form-control .invalid-message {
  margin-bottom: 0;
  color: var(--color-danger);
  font-size: 0.8em;
  animation: shake 400ms ease-in-out;
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(1em);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(1em);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
