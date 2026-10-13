<script setup lang="ts">
import { h } from "vue"
import ElementPassingChild from "./ElementPassingChild.vue"
import ElementPassingChild2 from "./ElementPassingChild2.vue"

const element = h("p", "ELEMENT2")
</script>

<template>
	<ElementPassingChild>
		<p>ELEMENT</p>
	</ElementPassingChild>
	<ElementPassingChild2 :element="element" />
</template>
