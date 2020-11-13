<template>
    <teleport to="body">
        <transition name="fade">
            <div class="modals" v-show="modals.length > 0" @click.self="closeModals">
                <component 
                    v-for="modal in modals"
                    :is="modal.component"
                    :key="modal.id"
                    @close="closeModal(modal.id)"
                />
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts">
import {App} from "vue";
import {Vue} from "vue-class-component";
import emitter from "./configuration/emitter";

interface Modal {
    id: number;
    component: App<Element>;
}

export default class ModalsComponent extends Vue {
    modals: Modal[] = [];
    modalIndex = 0;

    /**
     * Configure event listeners.
     */
    created() {
        // Add to modals when "add-modal" event is fired.
        emitter.on("add-modal", component => {
            this.modals.push({
                id        : this.modalIndex++,
                component : component
            });
        });
    }

    mounted() {
        document.onkeydown = e => {
            if(e.key === "Escape") {
                this.closeModals();
            }
        };
    }

    /**
     * Close all opened modals
     */
    closeModals() {
        this.modals = [];
    }

    /**
     * Close modal by id.
     */
    closeModal(id: number) {
        this.modals = this.modals.filter(modal => modal.id !== id);
    }
}
</script>

<style lang="scss" scoped>
    .modals {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        width: 100%;
        top: 0;
        background: rgba(0,0,0,.4);
        height: 100%;
        left: 0;


        &.fade-enter-active {
            opacity: 0;
        }

        &.fade-enter-active, &.fade-leave-active {
            transition: opacity .3s;
        }

        &.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }

        &.fade-enter-to {
            opacity: 1;
        }
    }
</style>