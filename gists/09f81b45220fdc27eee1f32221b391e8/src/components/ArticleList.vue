<script setup lang="ts">
defineProps<{
	articles?: { title: string | null; body: string }[]
}>()
</script>

<template>
	<main class="article-list">
		<div class="article-container">
			<article v-for="(article, index) in articles" :key="index">
				<div class="title" v-if="article.title">{{ article.title }}</div>
				<div class="article-card markdown-body" v-html="article.body"></div>
			</article>
		</div>
	</main>
</template>

<style scoped>
.article-list {
	flex: 1;
	padding: 2rem 3rem;
	height: 100vh;
	overflow-y: auto;
}

.article-container {
	max-width: 900px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.article-card {
	background-color: var(--color-background);
	border: 1px solid var(--color-border);
	border-radius: 12px;
	padding: 1.5rem;
	color: var(--color-text);
	font-size: inherit;
	line-height: 1.6;
	overflow-wrap: break-word;
}

.title {
	justify-self: right;
	font-size: 0.75rem;
	background: var(--color-background);
	border: 1px solid var(--color-border);
	padding: 0.1rem 0.4rem;
	border-radius: 8px;
	margin-top: -8px;
	margin-right: 12px;
	position: relative;
	top: 8px;
}

.markdown-body :is(pre, span) {
	color: light-dark(var(--shiki-light), var(--shiki-dark));
}
</style>
