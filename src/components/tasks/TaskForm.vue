<template>
  <form @submit.prevent="submitData">
    <div class="form-control" :class="{ invalid: !titleValidation.isValid }">
      <label for="tasktitle">Task Title</label>
      <input
        type="text"
        id="tasktitle"
        v-model.trim="taskTitle"
        @blur="tryValidateTitle"
      />
      <p class="invalid-message" v-if="!titleValidation.isValid">
        {{ titleValidation.invalidMessage }}
      </p>
    </div>
    <div class="form-control">
      <label for="taskdesc">Task Description</label>
      <textarea
        id="taskdesc"
        rows="4"
        v-model.trim="taskDesc"
        placeholder="(Optional)"
      ></textarea>
    </div>
    <div class="form-control" :class="{ invalid: !dateValidation.isValid }">
      <label for="duedate">Due Date</label>
      <input
        type="datetime-local"
        id="duedate"
        v-model.trim="taskDueDate"
        @blur="tryValidateDate"
      />
      <p class="invalid-message" v-if="!dateValidation.isValid">
        {{ dateValidation.invalidMessage }}
      </p>
    </div>
    <base-float-button
      alt-text="Save Task"
      icon-code="f0c7"
    ></base-float-button>
  </form>
</template>

<script>
export default {
  emits: ["form-submit"],
  data() {
    return {
      taskTitle: "",
      taskDesc: "",
      taskDueDate: "",
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
        dueDate: new Date(this.taskDueDate),
      };
      this.$emit("form-submit", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  font-size: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  margin: 1em 0;
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
