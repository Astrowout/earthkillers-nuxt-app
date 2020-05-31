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

<script type="text/javascript" src="./index.js"></script>
<style type="text/css" src="./index.module.scss" module lang="scss"></style>
