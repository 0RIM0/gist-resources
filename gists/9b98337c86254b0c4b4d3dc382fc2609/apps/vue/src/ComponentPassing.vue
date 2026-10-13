<script setup lang="ts">
import ComponentPassingChild from "./ComponentPassingChild.vue"
import ComponentChild from "./ComponentChild.vue"
</script>

<template>
	<ComponentPassingChild :component="ComponentChild" />
</template>
