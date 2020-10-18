<template>
	<transition
		:css="false"
		mode="out-in"
		@before-enter="beforeEnter"
		@enter="enter"
		@leave="leave"
	>
		<p
			:key="htmlTip"
			:class="[$style.root,
				{
					[$style.placeholder]: tip === 'placeholder'
				}
			]"
			v-html="htmlTip"
		/>
		</transtion>
	</transition>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
