<template>
	<main :class="$style.root">
		<img
			src="~/assets/images/planet.svg?data"
			:alt="$t('error.image')"
			:class="$style.image"
		>

		<h1 :class="$style.title">
			{{ $t('error.title') }}
		</h1>

		<p :class="$style.text">
			{{ $t('error.text') }}
		</p>

		<Button
			:url="localePath($pathNames.home)"
			icon-before="walking"
			hover-icon="running"
			secondary
			class="u-margin-top:64"
		>
			{{ $t('error.cta') }}
		</Button>
	</main>
</template>

<script src="./error/index.js"></script>
<style src="./error/index.module.scss" module lang="scss"></style>
