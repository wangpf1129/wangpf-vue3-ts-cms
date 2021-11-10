import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import { stepStore } from "@/store";
// @ts-ignore
import * as Sentry from "@sentry/vue";
// @ts-ignore
import { Integrations } from "@sentry/tracing";

import "normalize.css";
import "./assets/style/index.scss";
import { registerPlugins } from "@/plugins";

const app = createApp(App);
process.env.NODE_ENV === "production" &&
  Sentry.init({
    app,
    dsn: "https://52a716c044f84d8c8a0010a33539ee53@o1065687.ingest.sentry.io/6057758",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0
  });
app.use(registerPlugins);
app.use(store);
stepStore();
app.use(router);
app.mount("#app");
