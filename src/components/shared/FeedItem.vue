<template>
  <div v-bind:class="'feedItem ' + feedClass">
    <span v-if="action === 'borrowed'">
      <router-link v-bind:to="'/user/' + borrowerId">
        {{ borrower }}
      </router-link> borrowed 
      <router-link v-bind:to="'/item/' + linkToItem">
        {{ itemName }}
      </router-link> from 
      <router-link v-bind:to="'/user/' + ownerId">
        {{ owner }}
      </router-link>
    </span>
    <span v-if="action === 'listed'">
      <router-link v-bind:to="'/user/' + ownerId">
        {{ owner }}
      </router-link> put up 
      <router-link v-bind:to="'/item/' + linkToItem">
        {{ itemName }}
      </router-link>
      to be borrowed
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
  @Prop() private ownerId!: string;
  @Prop() private borrowerId!: string;
  @Prop() private action!: string;
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


