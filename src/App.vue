<template>
  <div id="app">
    <pt-header
      v-bind:loggedIn="$cookies.get('token')"
      v-bind:firstName="$cookies.get('user') ? $cookies.get('user').firstName : ''"
      v-bind:userId="$cookies.get('user') ? $cookies.get('user').uuid : ''"/>
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
  height: 100%;
  margin: 0;
  position: relative;
}

#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 103px;
}
</style>
