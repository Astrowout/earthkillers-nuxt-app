<template>
	<div class="l-container">
		<img
			:class="[$style.leaves, $style.leaves1]"
			src="~/assets/images/ui/leaves1.svg"
			alt="Leaves"
		>

		<img
			:class="[$style.leaves, $style.leaves2]"
			src="~/assets/images/ui/leaves2.svg"
			alt="Leaves"
		>

		<div>
			<h2 class="">
				{{ $t('home.subtitle') }}
			</h2>

			<h1>
				{{ $t('home.title') }}
			</h1>

			<Button
				:url="localePath($pathNames.stroll)"
				icon-after="arrow"
				class="u-margin-top:64"
			>
				{{ $t('home.cta') }}
			</Button>
		</div>
	</div>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
