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
  display: inline-flex;
  margin: 10px auto 0;
  width: 80%;

  .searchButton {
    flex-grow: 1;
    height: 40px;
    width: 50px;
  }

  #search-input {
    border: 5px solid $lavender;
    border-bottom-left-radius: 8px;
    border-right: none;
    border-top-left-radius: 8px;
    flex-grow: 3;
    font-size: 16px;
    margin: 0;
    padding: 10px;

    &:focus {
      box-shadow: 0px 1px 10px 1px $dark-purple;
      outline: 0;
    }
  }

}
</style>