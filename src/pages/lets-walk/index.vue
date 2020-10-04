<template>
	<div ref="container" :class="$style.container">
		<Year
			:class="$style.year"
			:current-year="currentYear"
			:is-future="future"
		/>

		<Population
			:class="$style.population"
			:current-population="currentPopulation"
			:is-future="future"
		/>

		<transition
			appear
			name="fade-out"
		>
			<p
				v-if="firstScroll"
				:class="$style.instructions"
			>
				{{ $t('stroll.scroll') }}
			</p>
		</transition>
	</div>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
