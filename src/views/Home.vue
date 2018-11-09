<template>
  <div id="home">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LButton from '@/components/shared/LButton.vue';
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

@Component({
  components: {
    LButton,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
#home {
  margin: 0;
}
</style>
