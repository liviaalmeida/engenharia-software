<template>
	<transition name="modal-transition">
    <div class="modal-wrapper" v-if="value">
			<div class="modal">
				<div class="modal-content">
					<DsIcon :name="type"
					class="modal-icon" />
					<p class="modal-title">{{ title }}</p>
					<p class="modal-text">{{ text }}</p>
				</div>
				<button class="modal-close"
				@click="$emit('close', false)">
					Fechar
				</button>
			</div>
    </div>
	</transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	model: {
		event: 'close',
	},
  props: {
		text: {
			required: true,
			type: String,
		},
		title: {
			required: true,
			type: String,
		},
		type: {
			default: 'info',
			required: false,
			type: String as () => 'info' | 'success' | 'error',
		},
		value: {
			required: true,
			type: Boolean,
		},
  },
})
</script>

<style lang="scss">
.modal {
	background: white;
	border-radius: 5px;
	font-family: 'Roboto';
	width: 450px;

	&-wrapper {
		background: rgba(50, 50, 50, .5);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
	}

	&-content {
		padding: 10px;
	}

	&-icon {
		height: 45px;

		&.error path {
			fill: $ds-error;
		}

		&.info path {
			fill: $ds-info;

		}

		&.success path {
			fill: $ds-success;
		}
	}

	&-title {
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 10px;
		text-transform: uppercase;
	}

	&-text {
		font-size: 13px;
	}

	&-close {
		background: none;
		border: none;
		border-top: 1px solid $ds-granite;
		color: $ds-granite;
		cursor: pointer;
		font-family: 'Roboto';
		padding: 5px;
		text-transform: uppercase;
		width: 100%;
	}

	&-transition {
		&-enter {
			opacity: 0;
		}
	
		&-enter-active {
			transition: .4s;

			.modal {
				animation: grow .4s ease-in 0s 1;
			}
		}
	
		&-leave-to {
			transition: .4s;
			opacity: 0;

			.modal {
				animation: grow .4s ease-out 0s 1 reverse;
			}
		}
	}
}

@keyframes grow {
	0% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
}
</style>
