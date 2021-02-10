import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

//import "./index.css";

const app = createApp(App);

app.use(router);

// Register global components

app.mount("#app");
