<script setup lang="ts">
import { type Component } from "vue"
defineProps<{ component: Component }>()
</script>

<template>
	<div>
		<component :is="component" />
	</div>
</template>
