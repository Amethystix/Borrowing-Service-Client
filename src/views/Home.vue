<template>
  <div id="home">
    <div class="content-wrapper">
      <div class="col-2 welcome">
        <div id="welcome-msg">
          <span></span>
        </div>
      </div>
      <div class="col-1" id="feed-container">
        <Feed></Feed>
      </div>
    </div>
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

@import '../assets/stylesheets/variables';

#home {
  margin: 0;
}

.content-wrapper {
  display: flex;
  position: relative;
  z-index: 2;
}

.welcome {
  background-color: $white;
  margin: 20px 25px;
  width: 66%;
}
</style>
