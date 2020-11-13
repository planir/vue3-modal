import { createApp } from 'vue'
import App from './App.vue'
import vue3Modals from "./../src/index";

const test = createApp(App);

test.use(vue3Modals);
test.mount("#app");