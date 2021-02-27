<template>
  <base-page title="Signup" subtitle="Start using TASKO">
    <base-form @submit.prevent>
      <base-form-control label="Full Name" control-id="fullName">
        <input
          type="text"
          id="fullName"
          autocomplete="false"
          v-model.trim="userFullName"
        />
      </base-form-control>

      <base-form-control label="Email Address" control-id="useremail">
        <input
          type="email"
          id="useremail"
          v-model.trim="userEmail"
          autocomplete="false"
        />
      </base-form-control>

      <base-form-control label="Password" control-id="userpassword">
        <input
          type="password"
          id="userpassword"
          v-model.trim="userPassword"
          autocomplete="false"
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
  </base-page>
</template>

<script>
export default {
  data() {
    return {
      userFullName: "",
      userEmail: "",
      userPassword: "",
    };
  },
};
</script>
