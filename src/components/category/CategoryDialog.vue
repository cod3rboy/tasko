<template>
  <base-dialog :show="show" @dialog-close="dismiss">
    <template #header>{{ dialogTitle }}</template>
    <template #actions>
      <base-button @click="saveCategory">Save</base-button>
      <base-button @click="dismiss" look="secondary">Cancel</base-button>
    </template>
    <form @submit.prevent="saveCategory">
      <div class="form-control">
        <label for="category">Category Name</label>
        <input type="text" id="category" v-model.trim="categoryName" />
        <p class="error-message" v-if="!isValidCategory">
          Category name cannot be empty
        </p>
      </div>
    </form>
  </base-dialog>
</template>

<script>
export default {
  emits: ["dismiss", "save"],
  props: {
    category: {
      type: Object,
      required: false,
      default: null,
    },
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  watch: {
    category(newValue) {
      if (!!newValue) {
        this.categoryName = newValue.name;
        this.categoryId = newValue.id;
      } else {
        this.reset();
      }
    },
  },
  data() {
    let categoryName = "";
    let categoryId = null;
    if (!!this.category) {
      categoryName = this.category.name;
      categoryId = this.category.id;
    }
    return {
      categoryName,
      categoryId,
      isValidCategory: true,
    };
  },
  computed: {
    isEditingCategory() {
      return !!this.categoryId;
    },
    dialogTitle() {
      return this.isEditingCategory ? "Edit Category" : "New Category";
    },
  },
  methods: {
    dismiss() {
      this.$emit("dismiss");
      this.reset();
    },
    saveCategory() {
      this.isValidCategory = true;
      if (this.categoryName === "") {
        this.isValidCategory = false;
        return;
      }
      this.$emit("save", { name: this.categoryName, id: this.categoryId });
      this.reset();
    },
    reset() {
      this.isValidCategory = true;
      this.categoryName = "";
      this.categoryId = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  font-size: 1.5rem;
  color: var(--color-surface-text);
}
.form-control label {
  text-transform: capitalize;
}
.form-control input {
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.25);
  font-size: inherit;
  padding: 0.25em;
  color: var(--color-surface-text);
  margin: 0.5em 0;
  min-width: 100%;
  outline: none;
}
.form-control .error-message {
  font-size: inherit;
  padding: 0;
  margin: 0;
  color: var(--color-danger);
}
</style>
