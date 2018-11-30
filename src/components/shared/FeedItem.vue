<template>
  <div v-bind:class="'feedItem ' + feedClass">
    <span>
      {{ borrower }} borrowed <a v-bind:href="linkToItem">{{ itemName }}</a> from {{ owner }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FeedItem extends Vue {
  @Prop() private feedClass!: string;
  @Prop() private itemName!: string;
  @Prop() private borrower!: string;
  @Prop() private owner!: string;
  @Prop() private linkToItem!: string;
}
</script>

<style lang="scss" scoped>
  @import '../../assets/stylesheets/variables';

  .feedItem {
    color: $light-black;
    padding: 25px;
    width: auto;
  }

  .mint {
    background-color: $dreamy-mint;
  }

  .white {
    background-color: $white;
  }

</style>


