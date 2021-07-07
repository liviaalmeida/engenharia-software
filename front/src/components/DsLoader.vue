<template>
	<div class="loader">
		<div v-for="(icon, index) in icons" :key="index">
			<transition name="jello">
				<DsIcon v-if="currentIndex === index"
				:name="icon" class="loader-icon" />
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			icons: [
				'food',
				'baby',
				'beauty',
				'toy',
				'phone',
				'sport',
				'tools',
				'book',
				'shirt',
				'furniture',
				'guitar',
				'paw',
			],
			currentIndex: 0,
		}
	},
	mounted() {
		setInterval(() => {
			this.currentIndex = (this.currentIndex + 1) % this.icons.length
		}, 1000)
	}
})
</script>

<style lang="scss">
$icon-size: 100px;

.loader {
	background: rgba(50, 50, 50, .5);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	position: fixed;
	z-index: 999;

	&-icon {
		height: $icon-size;
		width: $icon-size;
	}

	.jello {
		&-enter {
			display: none;
		}

		&-enter-active {
			transform-origin: bottom center;
			transition: $time;
			animation: jello 1s ease-out 0s 1 alternate;
		}
		
		&-leave-active {
			display: none;
		}
	}
}

@keyframes jello {
	0% { transform: scale(0, 0); }
	40% { transform: scale(1.1, 1.1); }
	50% { transform: scale(0.85, 0.75); }
	60% { transform: scale(1.05, 1.15); }
	70% { transform: scale(0.75, 0.95); }
	80% { transform: scale(1.15, 1.05); }
	90% { transform: scale(0.95, 0.85); }
	100% { transform: scale(1.05, 1.05); }
}
</style>
