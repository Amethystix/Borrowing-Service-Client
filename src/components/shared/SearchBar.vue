<template>
  <div id="search-bar">
    <label for="search-input">What are you looking for today?</label>
    <input type="text" id="search-input">
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

  margin: auto;
  width: 75%;

  .searchButton {
    display: inline-block;
    height: 40px;
    width: 50px;
  }

  #search-input {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    display: inline-block;
    font-size: 16px;
    padding: 10px;
    width: 80%;
  }

  label {
    color: $faded-gray;
    font-size: 16px;
    left: 15px;
    position: relative;
    top: 30px;
  }
}
</style>