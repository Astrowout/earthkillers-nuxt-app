<template>
	<div class="l-container">
		<h1>
			{{ $t('home.title') }}
		</h1>

		<h2 class="u-order:first u-color:mars">
			{{ $t('home.subtitle') }}
		</h2>

		<Button
			:url="localePath($pathNames.stroll)"
			icon-after="arrow"
			class="u-margin-top:64"
		>
			{{ $t('home.cta') }}
		</Button>
	</div>
</template>

<script src="./index.js"></script>
