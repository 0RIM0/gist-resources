<script setup lang="ts">
import { type VNode } from "vue"
defineProps<{ render: (message: string) => VNode }>()
</script>

<template>
	<div>
		<component :is="render('RENDER2')" />
	</div>
</template>
