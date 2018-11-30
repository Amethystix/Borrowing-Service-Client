<template>
<div id="header">
    <div class="outer-mauve-bottom" ref="header-mauve">
      <div class="inner-lavender">
        <div class="logo-container">
          <a href="#" class="logo"></a>
          <h1>PalmTree</h1>
        </div>
      </div>
    </div>
    <div class="outer-plum-bottom" ref="header-plum">
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
export default class Header extends Vue {

  constructor() {
    super();
    window.addEventListener('scroll', () => {
      this.makeSticky();
    });
  }

  private makeSticky() {
    const stickyBar = this.$refs['header-plum'] as HTMLDivElement;
    const headerBar = this.$refs['header-mauve'] as HTMLDivElement;
    if (window.pageYOffset >= stickyBar.clientTop + 116) {
      stickyBar.classList.add('sticky');
      headerBar.classList.add('stickyMauve');
    } 
    else if (window.pageYOffset <= 116) {
      stickyBar.classList.remove('sticky');
      headerBar.classList.remove('stickyMauve');
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/variables';

#header {

  box-shadow: 0px 1px 50px -10px $black;

  .outer-mauve-bottom.stickyMauve {
    padding-bottom: 90px;
  }

  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .outer-plum-bottom {
    background-color: $plum;
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



