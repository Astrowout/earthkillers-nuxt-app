<template>
	<main class="l-container l-container--max">
		<Cloud
			:class="[$style.cloud, $style.cloud1, {
				[$style.cloudAnimate]: revealComplete
			}]"
		/>
		<Cloud
			:class="[$style.cloud, $style.cloud2, {
				[$style.cloudAnimate]: revealComplete
			}]"
		/>
		<Cloud
			:class="[$style.cloud, $style.cloud3, {
				[$style.cloudAnimate]: revealComplete
			}]"
		/>
		<Cloud
			:class="[$style.cloud, $style.cloud4, {
				[$style.cloudAnimate]: revealComplete
			}]"
		/>
		<Cloud
			:class="[$style.cloud, $style.cloud5, {
				[$style.cloudAnimate]: revealComplete
			}]"
		/>

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

		<img
			:class="[$style.bird, $style.bird1, {
				[$style.birdAnimate]: revealComplete
			}]"
			src="~/assets/images/bird1.png"
			alt="bird"
		>
		<img
			:class="[$style.bird, $style.bird2, {
				[$style.birdAnimate]: revealComplete
			}]"
			src="~/assets/images/bird2.png"
			alt="bird"
		>
	</main>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
