<template>
	<ConditionalWrapper
		:class="[$style.root, {
			[$style['root--secondary']]: secondary
		}]"
		:url="url"
	>
		<Icon
			v-if="iconBefore"
			:name="iconBefore"
			:class="[$style.icon, $style.iconBefore]"
		/>

		<Icon
			v-if="iconBefore && hoverIcon"
			:name="hoverIcon"
			:class="[$style.hoverIcon, $style.iconBefore]"
		/>

		<slot />

		<Icon
			v-if="iconAfter"
			:name="iconAfter"
			:class="[$style.icon, $style.iconAfter]"
		/>

		<Icon
			v-if="iconAfter && hoverIcon"
			:name="hoverIcon"
			:class="[$style.hoverIcon, $style.iconAfter]"
		/>
	</ConditionalWrapper>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
