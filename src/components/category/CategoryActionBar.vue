<template>
  <base-actionbar>
    <template #action-text>{{ selectCount }} items selected</template>
    <template #action-items>
      <base-action-item
        icon-code="f304"
        alt-text="Edit Category"
        background-color="var(--color-secondary-surface)"
        foreground-color="var(--color-accent)"
        @click="actionEdit"
        v-if="showEditAction"
      ></base-action-item>
      <base-action-item
        icon-code="f2ed"
        alt-text="Delete Category"
        background-color="var(--color-secondary-surface)"
        foreground-color="var(--color-accent)"
        @click="actionDelete"
      ></base-action-item>
    </template>
  </base-actionbar>
</template>

<script>
export default {
  emits: ["edit", "delete"],
  props: {
    selectCount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    showEditAction() {
      return this.selectCount === 1;
    },
  },
  methods: {
    actionEdit() {
      this.$emit("edit");
    },
    actionDelete() {
      this.$emit("delete");
    },
  },
};
</script>
