<template>
	<modals />
	<button @click="showModal">Show Modal</button>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import CustomModal from "./components/customModal.vue";

export default class App extends Vue {
	
	showModal() {
		this.$modal.show(CustomModal, {message: "super test message"});
	}
}
</script>

<style lang="scss">
</style>
