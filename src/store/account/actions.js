import firebase from "firebase/app";

export default {
  async signup(context, payload) {
    const { fullName, email, password } = payload;
    // Create user account on firebase
    const auth = firebase.auth();
    try {
      const credential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await credential.user.updateProfile({ displayName: fullName });
      // Set logged in user
      context.commit("setCurrentUser", credential.user);
    } catch (error) {
      throw error;
    }
  },
  async login(context, payload) {
    const { email, password } = payload;
    // Login the user
    const auth = firebase.auth();
    try {
      const credential = await auth.signInWithEmailAndPassword(email, password);
      // Set logged in user
      context.commit("setCurrentUser", credential.user);
    } catch (error) {
      throw error;
    }
  },
  async logout(context) {
    // Logout the user
    const auth = firebase.auth();
    try {
      await auth.signOut();
      // Set user logged out
      context.commit("setCurrentUser", null);
    } catch (error) {
      throw error;
    }
  },
};
