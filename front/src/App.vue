<template>
  <div id="app">
    <DsLoader v-if="loading" />
    <DsHeader />
    <router-view class="view" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import DsHeader from '@/components/DsHeader.vue'
import DsLoader from '@/components/DsLoader.vue'

export default Vue.extend({
  components: {
    DsHeader,
    DsLoader,
  },
  computed: {
    ...mapGetters({
      loading: 'loading',
    })
  },
})
</script>

<style lang="scss">
@import '~@/assets/scss/reset.scss';
@import '~@/assets/scss/fonts.scss';

html, body, #app {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  * {
    box-sizing: border-box;
  }

  .view {
    min-height: calc(100% - 120px);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Chewy';
  }

  h1 {
    font-size: 40px;
    line-height: 50px;
  }

  h2 {
    font-size: 30px;
    line-height: 36px;
  }
}
</style>
