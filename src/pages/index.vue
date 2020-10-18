<template>
	<main class="l-container l-container--max">
		<div class="l-container__body">
			<h1
				:class="$style.title"
				v-html="htmlTitle"
			/>

			<h2
				:class="$style.subtitle"
				v-html="htmlSubtitle"
			/>

			<Button
				ref="cta"
				:url="localePath($pathNames.stroll)"
				icon-after="walking"
				hover-icon="running"
				class="u-margin-top:64"
				:class="$style.cta"
			>
				{{ $t('home.cta') }}
			</Button>
		</div>

		<Tip class="l-container__footer" />
	</main>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
