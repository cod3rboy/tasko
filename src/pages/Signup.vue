<template>
  <base-page title="Signup" subtitle="Start using TASKO">
    <base-form @submit.prevent="signup">
      <base-form-control
        label="Full Name"
        control-id="fullName"
        :has-error="!fullNameValidation.isValid"
        :invalid-message="fullNameValidation.invalidMessage"
      >
        <input
          type="text"
          id="fullName"
          autocomplete="false"
          v-model.trim="userFullName"
          @blur="tryValidateFullName"
        />
      </base-form-control>

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
          autocomplete="false"
          @blur="tryValidateUserEmail"
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
          autocomplete="false"
          @blur="tryValidatePassword"
        />
      </base-form-control>

      <base-form-control
        label="Confirm Password"
        control-id="confirmpassword"
        :has-error="!confirmPwdValidation.isValid"
        :invalid-message="confirmPwdValidation.invalidMessage"
      >
        <input
          type="password"
          id="confirmpassword"
          v-model.trim="confirmPassword"
          autocomplete="false"
          @blur="tryValidateConfirmPassword"
        />
      </base-form-control>

      <base-button look="accent" margin="1rem 0 0 0"
        >Create Account</base-button
      >
      <base-button
        look="secondary"
        :link="{ name: 'login' }"
        margin="1rem 0 0 0"
      >
        Already have an account?
      </base-button>
    </base-form>

    <base-loading-overlay
      v-if="isLoading"
      message="Signing up"
    ></base-loading-overlay>

    <base-dialog :show="hasError" @dialog-close="clearError">
      <template #header>Signup failed</template>
      <p>{{ error }}</p>
    </base-dialog>
  </base-page>
</template>

<script>
export default {
  // TODO : Use email regex for validation
  data() {
    return {
      userFullName: "",
      userEmail: "",
      userPassword: "",
      confirmPassword: "",
      fullNameValidation: {
        isValid: true,
        invalidMessage: "Your name cannot be empty",
      },
      emailValidation: {
        isValid: true,
        invalidMessage: "Please enter a valid email address",
      },
      pwdValidation: {
        isValid: true,
        invalidMessage: "Password must be atleast six characters long",
      },
      confirmPwdValidation: {
        isValid: true,
        invalidMessage: "Passwords do not match",
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
    tryValidateFullName() {
      this.fullNameValidation.isValid = this.userFullName.length > 0;
    },
    tryValidateUserEmail() {
      this.emailValidation.isValid = this.userEmail.indexOf("@") > 0;
    },
    tryValidatePassword() {
      this.pwdValidation.isValid = this.userPassword.length >= 6;
    },
    tryValidateConfirmPassword() {
      this.confirmPwdValidation.isValid =
        this.confirmPassword === this.userPassword;
    },
    validateData() {
      this.tryValidateFullName();
      this.tryValidateUserEmail();
      this.tryValidatePassword();
      this.tryValidateConfirmPassword();
      return (
        this.fullNameValidation.isValid &&
        this.emailValidation.isValid &&
        this.pwdValidation.isValid &&
        this.confirmPwdValidation.isValid
      );
    },
    clearError() {
      this.error = null;
    },
    setError(errorMessage) {
      this.error = errorMessage;
    },
    async signup() {
      if (!this.validateData()) return;
      this.isLoading = true;
      try {
        // create user account
        await this.$store.dispatch("account/signup", {
          fullName: this.userFullName,
          email: this.userEmail,
          password: this.confirmPassword,
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
