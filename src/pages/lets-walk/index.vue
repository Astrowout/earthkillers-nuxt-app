<template>
	<div ref="container" :class="$style.container">
		<div :class="$style.ui">
			<div :class="$style.top">
				<Year
					:current-year="currentYear"
					:is-future="future"
				/>

				<Hamburger />
			</div>

			<Population
				:current-population="currentPopulation"
				:class="$style.population"
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
	</div>
</template>

<script type="text/javascript" src="./index.js"></script>
<style type="text/css" src="./index.module.scss" module lang="scss"></style>
