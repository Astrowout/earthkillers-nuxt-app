<template>
	<a
		v-if="url && isExternalLink"
		:href="url"
		rel="noopener noreferrer"
		target="_blank"
	>
		<slot />
	</a>

	<nuxt-link
		v-else-if="url && !isExternalLink"
		:to="localePath(url)"
	>
		<slot />
	</nuxt-link>

	<button
		v-else
		type="button"
	>
		<slot />
	</button>
</template>

<script src="./index.js"></script>
