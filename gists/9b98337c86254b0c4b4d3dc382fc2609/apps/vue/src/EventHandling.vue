<script setup lang="ts">
import EventHandlingChild from "./EventHandlingChild.vue"

const alert = (msg: string) => window.alert(msg)
</script>

<template>
	<EventHandlingChild @clk="alert('clicked')" />
</template>
