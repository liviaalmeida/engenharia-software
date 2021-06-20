<template>
  <div id="app">
    <DsHeader />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DsHeader from '@/components/DsHeader.vue'

export default Vue.extend({
  components: {
    DsHeader,
  },
})
</script>

<style lang="scss">
@import '~@/assets/scss/reset.scss';
@import '~@/assets/scss/fonts.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  * {
    box-sizing: border-box;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
