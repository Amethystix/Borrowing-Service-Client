<template>
    
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Logout extends Vue {

  private created() {
    this.$cookies.remove('token');
    this.$cookies.remove('user');
  }

  private mounted() {
    this.$router.push('/');
  }
}
</script>

<style lang="scss" scoped>

</style>

