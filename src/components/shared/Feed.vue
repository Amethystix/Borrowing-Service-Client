<template>
  <div class="feedItems">
    <div class="feed-header">
      <span class="feed-header-text">
        Feed
      </span>
      <a v-on:click="getFeed()">
        <div v-bind:class="'refresh ' + (feedLoading ? 'loading' : '')"></div>
      </a>
    </div>
    <div v-for="(item, index) in feedItems" :key="index">
      <FeedItem v-bind:feedClass="index % 2 === 0 ? 'mint' : 'white'" 
                v-bind:borrower="item.mainPersonUsername"
                v-bind:owner="item.action === 'listed' ? item.mainPersonUsername : item.secondaryPersonUsername"
                v-bind:itemName="item.objectName"
                v-bind:linkToItem="item.objectId"
                v-bind:ownerId="item.action === 'listed' ? item.mainPersonId : item.secondaryPersonId"
                v-bind:borrowerId="item.mainPersonId"
                v-bind:action="item.action">
      </FeedItem>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import FeedItem from '@/components/shared/FeedItem.vue';
import axios from 'axios';

@Component({
  components: {
    FeedItem,
  },
})
export default class Feed extends Vue {

  private feedLoading = false;
  private feedItems = [];

  created() {
    this.getFeed();
  }

  private getFeed() {
    this.feedLoading = true;
    axios.get('http://localhost:3000/utils/feed')
      .then((res) => {
        // If the resource has changed (304 is not modified)
        if (res.status !== 304) {
          this.feedItems = res.data.slice(0, 10);
        }
      }).catch((err) => {

      }).finally(() => {
        this.feedLoading = false;
        console.log(this.feedItems);
      });
  }
}

</script>

<style lang="scss" scoped>

.feedItems {
  padding: 20px 25px;
}

.feed-header {
  background-color: $dark-white;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}

.feed-header-text {
  display: inline-block;
}

a {
  display: inline-block;
  position: absolute;
  right: 30px;
  top: 25px;
}

.refresh {
  background-image: url('../../assets/images/refresh.png');
  background-size: cover;
  display: inline-block;
  height: 25px;
  width: 25px;
}

.refresh.loading {
  animation: loader 1.2s linear infinite;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>


