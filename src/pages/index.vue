<template>
	<main class="l-container l-container--max">
		<h1 class="u-margin-top:16">
			{{ $t('home.title') }}
		</h1>

		<h2 class="u-order:first u-color:mars">
			{{ $t('home.subtitle') }}
		</h2>

		<Button
			:url="localePath($pathNames.stroll)"
			icon-after="walking"
			hover-icon="running"
			class="u-margin-top:64"
		>
			{{ $t('home.cta') }}
		</Button>
	</main>
</template>

<script src="./index.js"></script>
