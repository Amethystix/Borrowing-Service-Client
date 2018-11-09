<template>
<div id="header">
  <div class="outer-magenta-bottom">
    <div class="outer-purple-bottom">
      <div class="inner-purple">
        <h1>PalmTree</h1>
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
  .outer-magenta-bottom {
    background-color: $magenta;
    box-shadow: 0px 1px 50px -10px $black;
    padding-bottom: 20px;
  }

  .outer-purple-bottom {
    background-color: $med-purple;
    padding-bottom: 20px;
  }

  .inner-purple {
    background-color: $dark-purple;
    padding: 20px;
    text-align: left;
  }

  h1 {
    color: $white;
    font-size: 40px;
    font-weight: 700;
    margin: 0;
    text-shadow: 1px 1px $black;
  }
}

</style>



