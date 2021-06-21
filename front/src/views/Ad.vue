<template>
  <div class="ad">
    <h2 v-if="id">anúncio</h2>
    <h2 v-else>novo anúncio</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    id(): string {
      return this.$route.params.id
    },
  },  
})
</script>
