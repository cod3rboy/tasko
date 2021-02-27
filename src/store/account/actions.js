import firebase from "firebase/app";

export default {
  async signup(context, payload) {
    const { fullName, email, password } = payload;
    // Create user account on firebase
    const auth = firebase.auth();
    const credential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    // Save account info in database
    const database = firebase.database();
    const newUserRef = database.ref("users/" + credential.user.uid);
    await newUserRef.set({
      fullName,
    });
    // Set current user in local state
    context.commit("setCurrentUser", {
      fullName: fullName,
      userId: credential.user.uid,
    });
  },
};
