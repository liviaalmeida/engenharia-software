<template>
  <div class="item">
    <h2>{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    title(): string {
      return 'doando x'
    },
  },
})
</script>
