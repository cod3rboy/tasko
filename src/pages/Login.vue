<template>
  <base-page title="Start using TASKO" subtitle="Login with your credentials">
    <base-form @submit.prevent="login">
      <base-form-control
        label="Email Address"
        control-id="useremail"
        :has-error="!emailValidation.isValid"
        :invalid-message="emailValidation.invalidMessage"
      >
        <input
          type="email"
          id="useremail"
          v-model.trim="userEmail"
          @blur="tryValidateEmail"
          autocomplete="false"
        />
      </base-form-control>

      <base-form-control
        label="Password"
        control-id="userpassword"
        :has-error="!pwdValidation.isValid"
        :invalid-message="pwdValidation.invalidMessage"
      >
        <input
          type="password"
          id="userpassword"
          v-model.trim="userPassword"
          @blur="tryValidatePassword"
          autocomplete="false"
        />
      </base-form-control>
      <base-button look="accent" margin="1rem 0 0 0">Log in</base-button>
      <base-button
        look="secondary"
        :link="{ name: 'signup' }"
        margin="1rem 0 0 0"
      >
        Don&apos;t have an account?
      </base-button>
    </base-form>

    <base-loading-overlay
      v-if="isLoading"
      message="Logging in"
    ></base-loading-overlay>

    <base-dialog :show="hasError" @dialog-close="clearError">
      <template #header>Login failed</template>
      <p>{{ error }}</p>
    </base-dialog>
  </base-page>
</template>

<script>
export default {
  // TODO : Use email regex for validation
  data() {
    return {
      userEmail: "",
      userPassword: "",
      emailValidation: {
        isValid: true,
        invalidMessage: "Please enter a valid email address",
      },
      pwdValidation: {
        isValid: true,
        invalidMessage: "Password must be atleast six characters long",
      },
      isLoading: false,
      error: null,
    };
  },
  computed: {
    hasError() {
      return !!this.error;
    },
  },
  methods: {
    tryValidateEmail() {
      this.emailValidation.isValid = this.userEmail.indexOf("@") > 0;
    },
    tryValidatePassword() {
      this.pwdValidation.isValid = this.userPassword.length >= 6;
    },
    validateData() {
      this.tryValidateEmail();
      this.tryValidatePassword();
      if (!this.emailValidation.isValid || !this.pwdValidation.isValid)
        return false;
      return true;
    },
    clearError() {
      this.error = null;
    },
    setError(errorMessage) {
      this.error = errorMessage;
    },
    async login() {
      if (!this.validateData()) return;
      this.isLoading = true;
      try {
        await this.$store.dispatch("account/login", {
          email: this.userEmail,
          password: this.userPassword,
        });
        // Redirect to homepage
        this.$router.replace({ name: "home" });
      } catch (error) {
        this.setError(error.message);
      }
      this.isLoading = false;
    },
  },
};
</script>
