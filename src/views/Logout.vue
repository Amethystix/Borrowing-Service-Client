<template>
    
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Logout extends Vue {

  created() {
    this.$cookies.remove('token');
    this.$cookies.remove('user');
  }

  mounted() {
    this.$root.$emit('loggedOut');
    this.$router.push('/');
  }
}
</script>

<style lang="scss" scoped>

</style>

