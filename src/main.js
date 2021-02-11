import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseButton from "./components/ui/BaseButton.vue";

//import "./index.css";

const app = createApp(App);

app.use(router);
app.use(store);

// Register global components
app.component("base-dialog", BaseDialog);
app.component("base-button", BaseButton);

app.mount("#app");
