<template>
  <div class="loading-overlay">
    <div class="loading-ripple" aria-hidden="true"></div>
    <div class="message">{{ message }} ...</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: false,
      default: "Please wait",
    },
  },
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: var(--color-primary-text);
  top: 0;
  left: 0;
  z-index: var(--z-index-loading-overlay);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}
.message {
  margin-top: 1rem;
}
.loading-ripple {
  display: inline-block;
  position: relative;
  width: 6rem;
  height: 6rem;
}
.loading-ripple::before,
.loading-ripple::after {
  position: absolute;
  content: " ";
  border: 4px solid var(--color-primary-text);
  opacity: 1;
  border-radius: 50%;
  animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loading-ripple::after {
  animation-delay: -0.5s;
}
@keyframes ripple {
  0% {
    top: 2.5rem;
    left: 2.5rem;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 5rem;
    height: 5rem;
    opacity: 0;
  }
}
</style>
