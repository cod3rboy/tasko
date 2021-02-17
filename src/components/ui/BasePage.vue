<template>
  <section class="page">
    <header class="heading" v-if="hasHeading">
      <h3 class="title">
        <slot name="title">{{ title }}</slot>
      </h3>
      <h5 class="subtitle">
        <slot name="subtitle">{{ subtitle }}</slot>
      </h5>
    </header>
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    subtitle: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    hasHeading() {
      return (
        this.title.trim() !== "" ||
        this.subtitle.trim() !== "" ||
        !!this.$slots.title ||
        !!this.$slots.subtitle
      );
    },
  },
};
</script>

<style scoped>
.page {
  display: grid;
  font-size: 1.25rem;
  background-color: var(--color-secondary-surface);
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  min-height: 100%;
}
.page > .heading {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}
.page > .content {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
.heading,
.content {
  padding: 0 1em;
  margin: 1em 0 0.5em 0;
}
.title,
.subtitle {
  margin: 0;
}
.heading > .title {
  color: var(--color-primary);
  font-weight: normal;
}
.heading > .subtitle {
  color: var(--color-surface-text);
  font-weight: normal;
  margin-top: 0.5em;
}
</style>
