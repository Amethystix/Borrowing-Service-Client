<template>
  <div id="app">
    <pt-header/>
    <router-view/>
    <pt-footer/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>
<script>

import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

export default {
  components: {
    'pt-header': Header,
    'pt-footer': Footer,
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
}
</style>
