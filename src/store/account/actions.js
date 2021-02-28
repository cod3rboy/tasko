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
};
