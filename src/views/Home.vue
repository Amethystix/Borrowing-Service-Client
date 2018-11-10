<template>
  <div id="home">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LButton from '@/components/shared/LButton.vue';

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
