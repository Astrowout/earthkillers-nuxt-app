<template>
	<transition
		:css="false"
		mode="out-in"
		@before-enter="beforeEnter"
		@enter="enter"
		@leave="leave"
	>
		<p
			:key="tip"
			:class="[$style.root,
				{
					[$style.placeholder]: tip === 'placeholder'
				}
			]"
			v-html="tip"
		/>
		</transtion>
	</transition>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
