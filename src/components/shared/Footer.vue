<template>
    <div id="footer">
      <div class="outer-plum">
        <div class="outer-mauve">
          <div class="inner-lavender">
            <div id="footer-content">
            <div class="links">
              <!--TODO: add some cute links with v-for directive-->
              <div v-for="link in links" class="link">
                <a target="_blank" v-bind:href="link.url" v-bind:class="link.icon">
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Footer extends Vue {
  public links = [
    {
      icon: 'github',
      url: 'https://github.com/lad475/Borrowing-Service-Client',
    },
    {
      icon: 'facebook',
      url: '#',
    },
    {
      icon: 'twitter',
      url: '#',
    },
    {
      icon: 'youtube',
      url: '#',
    },
  ];
}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/variables';

#footer {

  bottom: 0;
  position: relative;
  width: 100%;

  .outer-plum {
    background-color: $plum;
    box-shadow: 0 0 50px -10px $dark-gray;
    padding-top: 20px;
  }

  .outer-mauve {
    background-color: $mauve;
    padding-top: 20px;
  }

  .inner-lavender {
    background-color: $lavender;
    padding: 15px;
  }

  .copyright {
    color: $white;
    float: left;
    font-size: 18px;
  }

  .link {
    display: inline-block;
    margin: 0 10px;
  }


  $icons: 'github', 'facebook', 'youtube', 'twitter';

  @each $icon in $icons {
    .#{$icon} {
      background-image: url('../../assets/icons/#{$icon}-logo-white.svg');
      background-repeat: no-repeat;
      background-size: contain;
      display: inline-block;
      height: 30px;
      width: 30px;

      &:hover {
        background-image: url('../../assets/icons/#{$icon}-logo.svg');
      }
    }
  }


}
</style>
