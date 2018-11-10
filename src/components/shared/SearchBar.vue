<template>
  <div id="search-bar">
    <input type="text" id="search-input" placeholder="What are you looking for today?">
    <LButton btnClass="search" btnId="search-button" btnLabel="Search"></LButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LButton from '@/components/shared/LButton.vue';

@Component({
  components: {
    LButton,
  },
})
export default class SearchBar extends Vue {

}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/variables';

#search-bar {

  margin: 10px auto 0;
  width: 75%;

  .searchButton {
    display: inline-block;
    height: 40px;
    width: 50px;
  }

  #search-input {
    border: px solid $white;
    border-bottom-left-radius: 8px;
    border-right: none;
    border-top-left-radius: 8px;
    display: inline-block;
    font-size: 16px;
    padding: 10px;
    width: 80%;

    &:focus {
      box-shadow: 0px 1px 10px 1px $dark-purple;
      outline: 0;
    }
  }

}
</style>