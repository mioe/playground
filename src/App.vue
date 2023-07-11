<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.options.routes

const appStore = useAppStore()
const {
	increment,
	decrement,
} = appStore
</script>

<template>
	<header class="flex gap-[16px] p-[8px]">
		<RouterLink
			v-for="route in routes"
			:key="route.name"
			:to="{ name: route.name }"
		>
			{{ route.name }}
		</RouterLink>
	</header>

	<div class="p-[8px]">
		<p>PINIA test</p>
		<p>count: {{ appStore.count }}</p>
		<button @click="increment">
			+
		</button>
		<button @click="decrement">
			-
		</button>
	</div>

	<RouterView />
</template>
