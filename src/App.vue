<template>
  <div id="app">
    <pt-header
      v-bind:loggedIn="$cookies.get('token')"
      v-bind:firstName="$cookies.get('user') ? $cookies.get('user').firstName : ''"/>
    <router-view/>
    <pt-footer/>
  </div>
</template>
<script>

import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

export default {
  components: {
    'pt-header': Header,
    'pt-footer': Footer,
  },
};
</script>
<style lang="scss">
@import './assets/stylesheets/variables';
body {
  background-color: $sandy-beige;
  margin: 0;
}
</style>
