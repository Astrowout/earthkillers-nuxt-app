<template>
	<button
		:class="$style.hamburger"
		type="button"
		@click="handleOpen(!isOpen)"
	>
		<span :class="$style.container">
			<span :class="[$style.line, $style['line--top']]" />
			<span :class="[$style.line, $style['line--middle']]" />
			<span :class="[$style.line, $style['line--bottom']]" />
		</span>
	</button>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
