<script setup lang="ts">
import { h } from "vue"
import RenderFunctionPassingChild from "./RenderFunctionPassingChild.vue"
import RenderFunctionPassingChild2 from "./RenderFunctionPassingChild2.vue"

const render = (message: string) => {
	return h("p", message)
}
</script>

<template>
	<RenderFunctionPassingChild v-slot="{ message }">
		<p>{{ message }}</p>
	</RenderFunctionPassingChild>
	<RenderFunctionPassingChild2 :render="render" />
</template>
