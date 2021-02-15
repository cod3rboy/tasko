import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseFloatButton from "./components/ui/BaseFloatButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseCheckbox from "./components/ui/BaseCheckbox.vue";
import BasePage from "./components/ui/BasePage.vue";

//import "./index.css";

const app = createApp(App);

app.use(router);
app.use(store);

// Register global components
app.component("base-dialog", BaseDialog);
app.component("base-button", BaseButton);
app.component("base-float-button", BaseFloatButton);
app.component("base-card", BaseCard);
app.component("base-checkbox", BaseCheckbox);
app.component("base-page", BasePage);

app.mount("#app");
