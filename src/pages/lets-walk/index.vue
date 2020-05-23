<template>
	<div :class="$style.scrollContainer">
		<div ref="container" :class="$style.container">
			<div :class="$style.ui">
				<div :class="$style.top">
					<Year
						:current-year="currentYear"
					/>

					<Hamburger />
				</div>

				<Population
					:current-population="currentPopulation"
					:class="$style.population"
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
	</div>
</template>

<script type="text/javascript" src="./index.js"></script>
<style type="text/css" src="./index.module.scss" module lang="scss"></style>
