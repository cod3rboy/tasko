<template>
  <base-page title="Start using TASKO" subtitle="Login with your credentials">
    <form @submit.prevent="login">
      <base-form-control
        label="Email Address"
        control-id="useremail"
        :has-error="false"
        invalid-message="Invalid Email"
      >
        <input
          type="email"
          id="useremail"
          v-model.trim="userEmail"
          autocomplete="false"
        />
      </base-form-control>

      <base-form-control
        label="Password"
        control-id="userpassword"
        :has-error="false"
        invalid-message="Invalid Password"
      >
        <input
          type="password"
          id="userpassword"
          v-model.trim="userPassword"
          autocomplete="false"
        />
      </base-form-control>
      <base-button look="accent">Log in</base-button>
    </form>
  </base-page>
</template>

<script>
export default {
  data() {
    return {
      userEmail: "",
      userPassword: "",
    };
  },
  methods: {
    login() {
      console.log("Logged IN");
    },
  },
};
</script>
