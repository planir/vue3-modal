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
    show(element: any, props: any = {}) {
        emitter.emit('add-modal', {
            element, props
        });
    }
}

export const Modals = ModalsClass;