import { App } from 'vue';
import emitter from "./configuration/emitter";
import IModals from './interfaces/Modals';

/**
 * Modals plugin instance.
 */
class ModalsClass implements IModals {
    /**
     * Show a modal.
     * 
     * @param {App} element - Modal element.
     */
    show(element: any) {
        emitter.emit('add-modal', element);
    }
}

export const Modals = ModalsClass;