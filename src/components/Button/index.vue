<template>
	<ConditionalWrapper
		:class="$style.root"
		:url="url"
		@mousemove.native="handleMouseMove"
		@mouseleave.native="handleMouseLeave"
	>
		<div
			ref="content"
			:class="[$style.content, {
				[$style['button--secondary']]: secondary
			}]"
		>
			<div
				v-if="iconBefore"
				:class="[$style.iconWrapper, $style.iconBefore]"
			>
				<Icon
					:name="iconBefore"
					:class="[$style.icon]"
				/>

				<Icon
					v-if="hoverIcon"
					:name="hoverIcon"
					:class="[$style.hoverIcon]"
				/>
			</div>

			<slot />

			<div
				v-if="iconAfter"
				:class="[$style.iconWrapper, $style.iconAfter]"
			>
				<Icon
					:name="iconAfter"
					:class="[$style.icon]"
				/>

				<Icon
					v-if="hoverIcon"
					:name="hoverIcon"
					:class="[$style.hoverIcon]"
				/>
			</div>
		</div>
	</ConditionalWrapper>
</template>

<script src="./index.js"></script>
<style src="./index.module.scss" module lang="scss"></style>
