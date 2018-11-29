<template>
<div id="header">
  <div class="outer-plum-bottom">
    <div class="outer-mauve-bottom">
      <div class="inner-lavender">
        <div class="logo-container">
          <a href="#" class="logo"></a>
          <h1>PalmTree</h1>
        </div>
      </div>
    </div>
    <SearchBar></SearchBar>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SearchBar from '@/components/shared/SearchBar.vue';

@Component({
  components: {
    SearchBar,
  },
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/variables';

#header {
  .outer-plum-bottom {
    background-color: $plum;
    box-shadow: 0px 1px 50px -10px $black;
    padding-bottom: 10px;
    text-align: center;
  }

  .outer-mauve-bottom {
    background-color: $mauve;
    padding-bottom: 20px;
  }

  .inner-lavender {
    background-color: $lavender;
    padding: 10px 20px 20px;
    text-align: left;
  }

  h1 {
    color: $white;
    display: inline;
    font-size: 40px;
    font-weight: 700;
    margin: 0;
  }

  .logo {
    background-image: url('../../assets/images/logo.png');
    background-size: cover;
    display: inline-block;
    height: 57px;
    position: relative;
    top: 10px;
    width: 55px;
  }

}

</style>



