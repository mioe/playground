<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '~/stores/app'
import { availableLocales, loadLanguageAsync } from '~/modules/vue-i18n'


const router = useRouter()
const routes = router.options.routes

const { t, locale } = useI18n()

const appStore = useAppStore()
const {
	increment,
	decrement,
} = appStore

async function toggleLocales() {
	const locales = availableLocales
	const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
	await loadLanguageAsync(newLocale)
	locale.value = newLocale
}
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
		<p>i18n test</p>
		<p>hello: {{ t('hello') }}</p>
		<button @click="toggleLocales">
			toggleLocales: {{ locale }}
		</button>
	</div>

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
