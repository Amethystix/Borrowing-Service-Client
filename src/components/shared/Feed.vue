<template>
  <div class="feedItems">
    <div v-for="(item, index) in feedItems">
      <FeedItem v-bind:feedClass="index % 2 === 0 ? 'mint' : 'white'" 
                v-bind:borrower="item.borrower"
                v-bind:owner="item.owner"
                v-bind:itemName="item.itemName"
                v-bind:linkToItem="item.linkToItem">
      </FeedItem>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FeedItem from '@/components/shared/FeedItem.vue';

@Component({
  components: {
    FeedItem,
  },
})
export default class Feed extends Vue {
  public feedItems = [
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToItem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToItem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToItem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToItem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToItem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToItem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToItem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToItem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToItem: '#',
      owner: 'Henry',
    },
  ];
}
</script>

<style lang="scss" scoped>

.feedItems {
  padding: 20px 25px;
}
</style>


