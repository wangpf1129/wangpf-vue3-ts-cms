import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import { App } from "vue";
import { Router } from "vue-router";

export default function (app: App, router: Router) {
  Sentry.init({
    app,
    dsn: "https://52a716c044f84d8c8a0010a33539ee53@o1065687.ingest.sentry.io/6057758",
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router)
        // tracingOrigins: ["localhost", "http://8.142.126.113:8888", /^\//]
      })
    ],
    release: process.env.VUE_APP_RELEASE_VERSION,
    logErrors: true,
    tracesSampleRate: 1.0
  });
}
