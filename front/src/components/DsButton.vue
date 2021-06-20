<template>
  <button @click="$emit('click', $event)"
  class="ds-button">
    <slot name="default"></slot>
  </button> 
</template>

<style lang="scss">
.ds-button {
  background-color: $ds-purple;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Chewy';
  font-size: 22px;
  height: 50px;
  width: 100%;

  &:not(:disabled) {
    cursor: pointer;
  }
}
</style>
