import { createApp } from "vue";
import router from "./router";
import { createHead } from "@vueuse/head";

// import "./assets/styles/colors.scss";
import "./assets/styles/main.scss";

import App from "./App.vue";
const head = createHead();

createApp(App).use(router).use(head).mount("#app");
