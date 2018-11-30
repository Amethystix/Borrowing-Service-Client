<template>
  <div id="home">
    <Feed></Feed>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LButton from '@/components/shared/LButton.vue';
import Feed from '@/components/shared/Feed.vue';

@Component({
  components: {
    LButton,
    Feed,
  },
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
#home {
  margin: 0;
}
</style>
