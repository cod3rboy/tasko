import firebase from "firebase/app";

export default {
  loadData(context) {
    const database = firebase.database();
    const currentUserId = context.getters["account/userId"];
    const data = database.ref(currentUserId + "/data").toJSON();
    context.commit("setData", data);
  },
};
