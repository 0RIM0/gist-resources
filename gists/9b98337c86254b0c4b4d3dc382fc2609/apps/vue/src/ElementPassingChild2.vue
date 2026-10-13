<script setup lang="ts">
import { type VNode } from "vue"
defineProps<{ element: VNode }>()
</script>

<template>
	<div>
		<component :is="element" />
	</div>
</template>
