<template>
	<div :class="$style.container">
		<img
			:class="[$style.leaves, $style.leaves1]"
			src="@/assets/images/ui/leaves1.svg"
			alt="Leaves"
		>

		<img
			:class="[$style.leaves, $style.leaves2]"
			src="@/assets/images/ui/leaves2.svg"
			alt="Leaves"
		>

		<span :class="$style.subtitle">
			{{ $t('home.subtitle') }}
		</span>

		<h1 :class="$style.title">
			{{ $t('home.title') }}
		</h1>

		<nuxt-link
			:to="localePath($pathNames.stroll)"
			:class="$style.cta"
		>
			{{ $t('home.cta') }}

			<svg
				aria-hidden="true"
				focusable="false"
				role="img"
				viewBox="0 0 448 512"
				:class="$style.arrowIcon"
			>
				<path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
			</svg>
		</nuxt-link>
	</div>
</template>

<script type="text/javascript" src="./index.js"></script>
<style type="text/css" src="./index.module.scss" module lang="scss"></style>
