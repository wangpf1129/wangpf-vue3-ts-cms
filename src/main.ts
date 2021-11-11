import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import { stepStore } from "@/store";
import sentry from "./config/sentry";
import "normalize.css";
import "./assets/style/index.scss";
import { registerPlugins } from "@/plugins";

const app = createApp(App);
sentry(app, router); // 注入 sentry
app.use(registerPlugins);
app.use(store);
stepStore();
app.use(router);
app.mount("#app");
