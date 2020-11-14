import { App } from 'vue';

/**
 * Modals plugin interface.
 */
export default interface IModals {
    show(element: any, props?: any): void
}