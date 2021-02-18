<template>
  <div class="content">
    <h1 class="heading">Not Found</h1>
    <p class="sub-heading">Not Found</p>
  </div>
</template>

<script>
export default {
  props: {
    notFound: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  min-width: 100%;
  min-height: 100%;
  justify-content: center;
  font-size: 1.4rem;
  gap: 1rem;
}
.heading {
  margin: inherit;
  color: var(--color-accent);
}
.sub-heading {
  margin: inherit;
}
</style>
