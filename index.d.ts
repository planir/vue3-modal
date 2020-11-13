import {App} from "vue";
import Modals from "./src/interfaces/Modals";

declare class Vue3Modals {
    static install: (app: App) => void;
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $modal: Modals
    }
}
