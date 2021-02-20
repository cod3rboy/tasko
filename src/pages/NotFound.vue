<template>
  <div class="content">
    <img class="img-responsive" src="/puppy.png" alt="Sad Puppy" />
    <h1 class="heading">404</h1>
    <p class="sub-heading" v-if="notFound !== ''">
      Found nothing at <b>{{ notFound }}</b>
    </p>
    <p class="sub-heading">You reached dead end!</p>
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
.img-responsive {
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  height: auto;
  filter: grayscale(100%);
}
</style>
