<script setup lang="ts">
withDefaults(
	defineProps<{
		hello?: string
		world: string
	}>(),
	{
		hello: 'hello',
	},
)
</script>

<template>
	<section class="w-[20px] h-[20px] bg-green-900">
		{{ hello }} {{ world }}
	</section>
</template>
