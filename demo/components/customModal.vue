<template>
    <modal>
        <span>CUSTOM STYLES</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet laboriosam magnam aliquam vel. Beatae nihil, eum, dolore nostrum ipsum labore obcaecati exercitationem ducimus assumenda necessitatibus voluptatibus aut eveniet iusto.
        <button @click="closeMe">Close me</button>
    </modal>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class CustomModal extends Vue {
    /**
     * 
     */
    closeMe() {
        this.$emit('close');
    }
}
</script>

<style lang="scss" scoped>
    .vue3-modal {
        
        span {
            font-size: 40px;
        }
    }
</style>