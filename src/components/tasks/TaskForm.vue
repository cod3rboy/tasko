<template>
  <form @submit.prevent="submitData">
    <base-form-control
      label="Task Title"
      control-id="tasktitle"
      :has-error="!titleValidation.isValid"
      :invalid-message="titleValidation.invalidMessage"
    >
      <input
        type="text"
        id="tasktitle"
        v-model.trim="taskTitle"
        @blur="tryValidateTitle"
      />
    </base-form-control>

    <base-form-control label="Task Description" control-id="taskdesc">
      <textarea
        id="taskdesc"
        rows="4"
        v-model.trim="taskDesc"
        placeholder="(Optional)"
      ></textarea>
    </base-form-control>

    <base-form-control
      label="Due Date"
      control-id="duedate"
      :has-error="!dateValidation.isValid"
      :invalid-message="dateValidation.invalidMessage"
    >
      <input
        type="datetime-local"
        id="duedate"
        v-model.trim="taskDueDate"
        @blur="tryValidateDate"
      />
    </base-form-control>

    <base-float-button
      alt-text="Save Task"
      icon-code="f0c7"
    ></base-float-button>
  </form>
</template>

<script>
import BaseFormControl from "../ui/BaseFormControl.vue";
export default {
  components: { BaseFormControl },
  props: {
    initialData: {
      type: Object,
      required: false,
      default: {},
    },
  },
  emits: ["form-submit"],
  data() {
    const taskTitle = !!this.initialData.title ? this.initialData.title : "";
    const taskDesc = !!this.initialData.description
      ? this.initialData.description
      : "";
    const taskDueDate = !!this.initialData.dueDate
      ? new Date(this.initialData.dueDate)
          .toISOString()
          .split(".")[0]
          .slice(0, -3)
      : "";
    return {
      taskTitle,
      taskDesc,
      taskDueDate,
      titleValidation: {
        isValid: true,
        invalidMessage: "Task title cannot be empty!",
      },
      dateValidation: {
        isValid: true,
        invalidMessage: "Task due date is not valid!",
      },
    };
  },

  methods: {
    tryValidateTitle() {
      this.titleValidation.isValid = this.taskTitle !== "";
    },
    tryValidateDate() {
      this.dateValidation.isValid = this.taskDueDate !== "";
    },
    validateData() {
      this.tryValidateTitle();
      this.tryValidateDate();
      return this.titleValidation.isValid && this.dateValidation.isValid;
    },
    submitData() {
      if (!this.validateData()) return;
      const formData = {
        title: this.taskTitle,
        description: this.taskDesc,
        dueDate: new Date(this.taskDueDate).getTime(),
      };
      this.$emit("form-submit", formData);
    },
  },
};
</script>
