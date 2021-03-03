import firebase from "firebase/app";

export default {
  async signup(_, payload) {
    const { fullName, email, password } = payload;
    // Create user account on firebase
    const auth = firebase.auth();
    try {
      const credential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await credential.user.updateProfile({ displayName: fullName });
    } catch (error) {
      throw error;
    }
  },
  async login(_, payload) {
    const { email, password } = payload;
    // Login the user
    const auth = firebase.auth();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  },
  async logout() {
    // Logout the user
    const auth = firebase.auth();
    try {
      await auth.signOut();
    } catch (error) {
      throw error;
    }
  },
  authenticationChanged(context, user) {
    if (user) {
      // User signed in
      context.commit("setCurrentUser", { isLoggedIn: true, info: user });
      // Store the login status flag in the local storage of browser
      localStorage.setItem("loggedIn", "true");
    } else {
      // User signed out
      context.commit("setCurrentUser", { isLoggedIn: false, info: null });
      // Clear the login status flag from the local storage of browser
      localStorage.removeItem("loggedIn");
    }
  },
};
