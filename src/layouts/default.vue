<template>
	<div
		id="__default"
		@mousemove="handleMouseMove"
		@click="handleMouseClick"
	>
		<nuxt />

		<div
			ref="cursor"
			class="c-cursor"
		/>
	</div>
</template>

<script src="./default/index.js"></script>
