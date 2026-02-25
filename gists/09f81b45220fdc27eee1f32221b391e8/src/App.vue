<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue"
import ArticleList from "./components/ArticleList.vue"
import { getGists, type Gists } from "./utils/gists"
import { computed, onMounted, onUnmounted, ref } from "vue"

const data = ref<Gists>()
const state = ref<"loading" | "loaded" | "error">("loading")
const activeGroup = ref<string | null>(null)

const groups = computed(() => {
	return (
		data.value?.map((item) => {
			return {
				name: item.group,
				count: item.articles.length,
			}
		}) ?? []
	)
})

const articles = computed(() => {
	if (!data.value) return []
	if (!activeGroup.value) return []

	const group = data.value.find((g) => g.group === activeGroup.value)
	return group?.articles ?? []
})

const init = async () => {
	try {
		state.value = "loading"
		const hash = location.hash.slice(1)
		const gists = await getGists(hash)
		data.value = gists
		activeGroup.value = gists[0]?.group ?? null
		state.value = "loaded"
	} catch (err) {
		console.error(err)
		state.value = "error"
	}
}

onMounted(() => {
	init()
	window.addEventListener("hashchange", init)
})

onUnmounted(() => {
	window.removeEventListener("hashchange", init)
})
</script>

<template>
	<div class="app-layout">
		<div v-if="state === 'loading'" class="status-container">
			<div class="loader">Loading...</div>
		</div>
		<div v-else-if="state === 'error'" class="status-container">
			<div class="error-message">データの取得に失敗しました</div>
		</div>
		<template v-else>
			<Sidebar :groups="groups" v-model="activeGroup" />
			<ArticleList :articles="articles" />
		</template>
	</div>
</template>

<style>
/* App global overrides */
body {
	margin: 0;
	padding: 0;
	overflow: hidden;
}

#app {
	max-width: 100vw;
	margin: 0;
	padding: 0;
	font-weight: normal;
}
</style>

<style scoped>
.app-layout {
	display: flex;
	height: 100vh;
	width: 100vw;
	background-color: var(--color-background-soft);
}

.status-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
}

.error-message {
	font-size: 1.25rem;
	color: #ff4757;
}

.loader {
	font-size: 1.25rem;
	color: var(--color-text);
	animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
	0% {
		opacity: 0.3;
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0.3;
	}
}
</style>
