<template>
    <modal>
        <span>CUSTOM STYLES</span>
        {{message}}
        <button @click="closeMe">Close me</button>
    </modal>
</template>

<script lang="ts">
import {Vue, prop} from "vue-class-component";

class Props {
    message = prop<string>({default: 'test'})
}

export default class CustomModal extends Vue.props(Props) {
    
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