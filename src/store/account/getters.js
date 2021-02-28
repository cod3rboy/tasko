import firebase from "firebase/app";

export default {
  currentUser() {
    return firebase.auth().currentUser;
  },
  hasLoggedIn() {
    return !!firebase.auth().currentUser;
  },
};
