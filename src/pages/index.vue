<template>
	<main class="l-container l-container--max">
		<div class="l-container__body">
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
		</div>

		<Tip class="l-container__footer" />
	</main>
</template>

<script src="./index.js"></script>
