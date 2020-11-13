import {App} from "vue";

// Required components
import modals from "./modals.vue";
import modal from "./component/modal.vue";
import { Modals } from './Modals';

export default {
    install: (app: App): void => {
        app.component('modal', modal);
        app.component('modals', modals);
        
        app.config.globalProperties.$modal = new Modals();
    }
  }