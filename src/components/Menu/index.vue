<template>
	<div
		v-if="isOpen"
		:class="$style.menu"
	>
		<div :class="$style.timeline">
			timeline
		</div>

		<div :class="$style.info">
			<section :class="$style.section">
				<h2 :class="$style.title">
					{{ $t('menu.resources') }}
				</h2>

				<ul>
					<li>
						<a
							:class="$style.link"
							href="https://illlustrations.co/"
							target="_blank"
							rel="noopener noreferrer"
						>
							illustrations.co
						</a>
					</li>

					<li>
						<a
							:class="$style.link"
							href="https://www.flaticon.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							flaticon.com
						</a>
					</li>

					<li>
						<a
							:class="$style.link"
							href="https://population.io/"
							target="_blank"
							rel="noopener noreferrer"
						>
							population.io
						</a>
					</li>
				</ul>
			</section>

			<section :class="$style.section">
				<h2 :class="$style.title">
					{{ $t('menu.about.title') }}
				</h2>

				<p
					:class="$style.content"
					v-html="$t('menu.about.content')"
				/>
			</section>

			<section :class="$style.section">
				<h2 :class="$style.title">
					{{ $t('menu.contact.title') }}
				</h2>

				<div :class="$style.content">
					<span :class="$style.madeby">
						{{ $t('menu.contact.content_1') }}
						<svg width="18" aria-hidden="true" focusable="false" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>
						{{ $t('menu.contact.content_2') }}
						<svg width="20" aria-hidden="true" focusable="false" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" /></svg>
					</span>

					<a
						:class="$style.link"
						href="https://woutvandesompele.be/"
						target="_blank"
						rel="noopener noreferrer"
					>
						woutvandesompele.be
					</a>

					<div :class="$style.socials">
						<a
							:class="$style.social"
							href="https://www.linkedin.com/in/wout-vandesompele"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg height="40" aria-hidden="true" focusable="false" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
						</a>

						<a
							:class="$style.social"
							href="https://www.instagram.com/the__asstronaut/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg height="40" aria-hidden="true" focusable="false" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
						</a>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script type="text/javascript" src="./index.js"></script>
<style type="text/css" src="./index.module.scss" module lang="scss"></style>
