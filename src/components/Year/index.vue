<template>
	<div
		:class="[$style.year, {
			[$style['is-future']]: isFuture
		}]"
	>
		<span :class="$style.label">
			{{ $t('stroll.year') }}
		</span>

		<span :class="$style.content">
			{{ currentYear }}
		</span>
	</div>
</template>

<script type="text/javascript" src="./index.js"></script>
<style type="text/css" src="./index.module.scss" module lang="scss"></style>
