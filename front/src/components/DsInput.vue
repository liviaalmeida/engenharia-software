<template>
  <div :class="['ds-input', {
    'ds-input--disabled': disabled,
    'ds-input--focused': focus,
  }]">
    <label class="ds-input-label">
      {{ label }}
    </label>
    <textarea v-if="type === 'textarea'" :value="value" :name="name"
		:placeholder="placeholder" :required="required"
    @blur="focus = false" @focus="focus = true"
    @input="$emit('input', $event.target.value)"
    v-bind="inputAttrs" />
    <input v-else :type="type" :value="value" :name="name"
		:placeholder="placeholder" :required="required"
    @blur="focus = false" @focus="focus = true"
    @input="$emit('input', $event.target.value)"
    v-bind="inputAttrs" >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  model: {
    event: 'input',
  },
  props: {
    disabled: {
      required: false,
      type: Boolean,
    },
    'input-attrs': {
      required: false,
      type: Object,
    },
    label: {
      required: true,
      type: String,
    },
    name: {
      required: false,
      type: String,
    },
    placeholder: {
      required: false,
      type: String,
    },
    required: {
      required: false,
      type: Boolean,
    },
    type: {
      default: 'text',
      required: false,
      type: String,
    },
    value: {
      required: false,
      type: String,
    },
  },
  data() {
    return {
      focus: false,
    }
  },
})
</script>

<style lang="scss">
.ds-input {
  border: 1px solid $ds-granite;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  text-align: left;
  transition: border-color $time;
  min-height: 50px;

  input, textarea {
    border: none;
    outline: transparent;
    font-family: 'Roboto';
    font-size: 16px;

		&::placeholder {
			color: $ds-granite;
		}
  }

  &-label {
		color: $ds-black;
    font-family: 'Lato';
    font-size: 12px;
    transition: color $time;
    margin-bottom: 5px;
  }

  &--focused {
    border-color: $ds-purple;

    .ds-input-label {
      color: $ds-purple;
    }
  }
}
</style>
