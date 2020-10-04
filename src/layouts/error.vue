<template>
	<div :class="$style.root">
		<h1 :class="$style.title">
			{{ $t('error.title') }}
		</h1>

		<p :class="$style.text">
			{{ $t('error.text') }}
		</p>

		<Button
			:url="localePath($pathNames.home)"
			icon-before="arrow"
			secondary
			class="u-margin-top:24"
		>
			{{ $t('error.cta') }}
		</Button>
	</div>
</template>

<script src="./error/index.js"></script>
<style src="./error/index.module.scss" module lang="scss"></style>
