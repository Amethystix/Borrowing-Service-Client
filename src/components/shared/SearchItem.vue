<template>
  <div class="search-item">
    <div class="item-title">
      <router-link v-bind:to="'/item/' + itemId">{{ name }}</router-link>
    </div>
    <div class="img"></div>

    <div class="item-desc">
      {{ description }}
      <div>
        Located in {{ zipCode }}
      </div>
    </div>
    <div class="item-owner">
      Put up by <router-link v-bind:to="'/user/' + ownerId">{{ owner }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SearchItem extends Vue {

  @Prop() private name!: string;
  @Prop() private description!: string;
  @Prop() private owner!: string;
  @Prop() private ownerId!: string;
  @Prop() private itemId!: string;
  @Prop() private zipCode!: string;

}
</script>

<style lang="scss" scoped>

.search-item {
  background-color: $dreamy-mint;
  border: 2px solid $black;
  padding: 15px;
  margin-top: 5px;
  .img {
    background-color: $faded-gray;
    background-image: url('../../assets/images/noImage.png');
    background-size: contain;
    display: inline-block;
    height: 100px;
    width: 100px;
  }

  .item-desc {
    display: inline-block;
    padding: 20px;
    vertical-align: top;
    width: 50%;
  }

  .item-title {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

}
</style>

