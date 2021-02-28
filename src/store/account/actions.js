import firebase from "firebase/app";

export default {
  async signup(_, payload) {
    const { fullName, email, password } = payload;
    // Create user account on firebase
    const auth = firebase.auth();
    const credential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    await credential.user.updateProfile({ displayName: fullName });
  },
  async login(_, payload) {
    const { email, password } = payload;
    // Login the user
    const auth = firebase.auth();
    await auth.signInWithEmailAndPassword(email, password);
  },
  async logout() {
    // Logout the user
    const auth = firebase.auth();
    await auth.signOut();
  },
};
