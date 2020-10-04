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

		<slot />

		<Icon
			v-if="iconAfter"
			:name="iconAfter"
			:class="[$style.icon, $style.iconAfter]"
		/>
	</ConditionalWrapper>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
