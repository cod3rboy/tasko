<template>
  <base-dialog :show="show" @dialog-close="cancelDialog">
    <template #header>New Category</template>
    <template #actions>
      <base-button @click="saveCategory">Save</base-button>
      <base-button :isPrimary="false" @click="cancelDialog">Cancel</base-button>
    </template>
    <form>
      <div class="form-control">
        <label for="category">Category Name</label>
        <input type="text" id="category" v-model.trim="categoryName" />
      </div>
    </form>
  </base-dialog>
</template>
<script>
export default {
  emits: ["save", "cancel"],
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      categoryName: "",
    };
  },
  methods: {
    cancelDialog() {
      this.$emit("cancel");
    },
    saveCategory() {
      this.$emit("save", this.categoryName);
      this.categoryName = "";
    },
  },
};
</script>
<style scoped>
.form-control {
  font-size: 1.4rem;
  color: var(--color-surface-text);
}
.form-control label {
  text-transform: capitalize;
}
.form-control input {
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.25);
  font-size: inherit;
  padding: 0.25em 0;
  color: var(--color-surface-text);
  margin: 0.5em 0;
  min-width: 100%;
}
</style>
