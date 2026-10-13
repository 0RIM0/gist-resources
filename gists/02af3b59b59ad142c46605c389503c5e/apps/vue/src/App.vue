<script setup lang="ts">
import { ref } from "vue"

const flag = ref(false)
const items = ref([
	{ id: 1, name: "apple" },
	{ id: 2, name: "banana" },
	{ id: 3, name: "cherry" },
])

const toggle = () => {
	flag.value = !flag.value
}

const toLast = (idx: number) => {
	items.value = items.value.toSpliced(idx, 1).concat([items.value[idx]!])
}
</script>

<template>
	<div>
		<p>
			flag is
			<span v-if="flag" class="on">on</span>
			<span v-else class="off">off</span>
		</p>
		<button @click="toggle">toggle</button>
		<hr />
		<ul>
			<li v-for="(item, idx) in items" :key="item.id">
				<span>{{ item.name }}</span>
				<button @click="toLast(idx)">last</button>
			</li>
		</ul>
	</div>
</template>

<style>
.on {
	color: #388e3c;
}

.off {
	color: #d32f2f;
}

hr {
	border: 0;
	height: 2px;
	background-color: #bbb;
	margin: 16px 0;
}

li {
	margin: 8px 0;
}

button {
	font-size: inherit;
	padding: 3px 16px;
	color: #fafafa;
	background: #2196f3;
	border: solid 1px #0002;
	border-radius: 4px;
	box-shadow:
		rgba(255, 255, 255, 0.2) 0px 1px 1px 0 inset,
		rgba(0, 0, 0, 0.3) 0px 1px 1px 0;
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
	cursor: pointer;
}

li button {
	margin-left: 20px;
}
</style>
