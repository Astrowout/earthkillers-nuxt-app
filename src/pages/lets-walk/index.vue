<template>
	<div ref="container" class="l-container">
		<div class="l-container__body">
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
		</div>

		<Tip class="l-container__footer" />
	</div>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
