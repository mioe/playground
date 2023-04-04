<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.options.routes
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

	<RouterView />
</template>
