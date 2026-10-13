<script setup lang="ts">
defineEmits<{ (e: "clk"): void }>()
</script>

<template>
	<button @click="$emit('clk')">click me</button>
</template>
