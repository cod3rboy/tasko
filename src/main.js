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
import BaseRoundButton from "./components/ui/BaseRoundButton.vue";
import BaseSelectableListItem from "./components/ui/BaseSelectableListItem.vue";

const app = createApp(App);

app.use(store);
app.use(router);

// Register global components
app.component("base-dialog", BaseDialog);
app.component("base-button", BaseButton);
app.component("base-float-button", BaseFloatButton);
app.component("base-card", BaseCard);
app.component("base-checkbox", BaseCheckbox);
app.component("base-page", BasePage);
app.component("base-round-button", BaseRoundButton);
app.component("base-selectable-list-item", BaseSelectableListItem);

app.mount("#app");
