<template>
	<div
		:class="[$style.year, {
			[$style['is-future']]: isFuture
		}]"
	>
		<span :class="$style.label">
			{{ $t('walk.year') }}
		</span>

		<span :class="$style.content">
			{{ currentYear }}
		</span>
	</div>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
