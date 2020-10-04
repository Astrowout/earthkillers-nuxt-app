<template>
	<div
		:class="[$style.population, {
			[$style['is-future']]: isFuture
		}]"
	>
		<span :class="$style.label">
			{{ $t('stroll.population') }}
		</span>

		<transition
			:css="false"
			mode="out-in"
			@appear="enter"
			@leave="leave"
			@enter="enter"
		>
			<span
				:key="throttledPopulation"
				:class="$style.content"
			>
				<span
					v-for="(number, i) in throttledPopulationArray"
					:key="i"
					:class="$style.char"
				>
					{{ number }}
				</span>
			</span>
		</transition>
	</div>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
