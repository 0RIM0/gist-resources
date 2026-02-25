<script setup lang="ts">
defineProps<{
	groups: { name: string; count: number }[]
}>()

const activeGroup = defineModel<string | null>()

function selectGroup(name: string | null) {
	activeGroup.value = name
}
</script>

<template>
	<aside class="sidebar">
		<ul class="group-list">
			<li
				v-for="group in groups"
				:key="group.name"
				class="group-list-item"
				:class="{ active: activeGroup === group.name }"
				@click="selectGroup(group.name)"
			>
				<span class="group-name">{{ group.name }}</span>
				<span class="group-count">{{ group.count }}</span>
			</li>
		</ul>
	</aside>
</template>

<style scoped>
.sidebar {
	width: 250px;
	background-color: var(--color-background-mute, #f8f9fa);
	padding: 1.5rem;
	border-right: 1px solid var(--color-border);
	height: 100vh;
	position: sticky;
	top: 0;
	overflow-y: auto;
}

@media (prefers-color-scheme: dark) {
	.sidebar {
		background-color: var(--color-background-soft, #282828);
	}
}

.sidebar h2 {
	font-size: 1.25rem;
	margin-bottom: 1rem;
	color: var(--color-heading);
	font-weight: 600;
}

.group-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.group-list-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.6rem 0.75rem;
	margin-bottom: 0.25rem;
	border-radius: 6px;
	cursor: pointer;
	transition:
		background-color 0.2s,
		color 0.2s;
	color: var(--color-text);
}

.group-list-item:hover {
	background-color: var(--color-background-soft, #e9ecef);
}

.group-list-item.active {
	background-color: #42b883;
	/* Vue green */
	color: #fff;
	font-weight: 500;
}

.group-count {
	font-size: 0.8rem;
	background-color: rgba(128, 128, 128, 0.2);
	padding: 0.1rem 0.5rem;
	border-radius: 12px;
}

.group-list-item.active .group-count {
	background-color: rgba(255, 255, 255, 0.2);
}
</style>
