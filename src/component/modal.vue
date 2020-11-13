<template>
    <div class="vue3-modal">
        <slot />
    </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class Modal extends Vue {

}
</script>

<style lang="scss" scoped>
    .vue3-modal {
        width: 400px;
        padding: 16px;
        border-radius: 6px;
        background: white;
    }
</style>