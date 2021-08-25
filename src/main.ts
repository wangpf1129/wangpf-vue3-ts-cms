import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import { registerPlugins } from "@/plugins";

const app = createApp(App);
app.use(registerPlugins);
app.use(router);
app.use(store);
app.mount("#app");
