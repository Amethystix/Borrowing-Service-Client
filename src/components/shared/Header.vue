<template>
<div id="header">
      <div class="inner-lavender">
        <div class="logo-container">
          <router-link to="/" class="logo"></router-link>
          <h1>PalmTree</h1>
        </div>
      </div>
      <div class="outer-mauve-bottom" ref="header-mauve">
      <div class="login-link-container col-1">
        <span class="about-link">
          <router-link to="/about">About</router-link>
        </span>
        <span class="login-link" v-if="!loggedIn">
          <router-link to="/login">Log in</router-link>
        </span>
        <span class="login-link" v-if="!loggedIn">
          <router-link to="/register">Sign up</router-link>
        </span>
        <span class="login-link" v-if="loggedIn">
          <router-link to="/logout">Hey, {{ firstName }}!</router-link>
        </span>
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

  private loggedIn!: boolean;
  private firstName!: string;

  constructor() {
    super();
    window.addEventListener('scroll', () => {
      this.makeSticky();
    });
  }

  created() {
    this.loggedIn = this.$cookies.get('user') ? true : false;
    if (this.loggedIn) {
      this.firstName = this.$cookies.get('user').firstName;
    }
  }

  computed() {
    this.$root.$on('loggedOut', () => {
      this.loggedIn = false;
    });
    this.$root.$on('loggedIn', (user: any) => {
      this.loggedIn = true;
      this.firstName = user.firstName;
    });
    this.loggedIn = this.$cookies.get('user') ? true : false;
    if (this.loggedIn) {
      this.firstName = this.$cookies.get('user').firstName;
    }
  }

  private makeSticky() {
    const stickyBar = this.$refs['header-plum'] as HTMLDivElement;
    const headerBar = this.$refs['header-mauve'] as HTMLDivElement;
    if (window.pageYOffset >= stickyBar.clientTop + 133) {
      stickyBar.classList.add('sticky');
      headerBar.classList.add('stickyMauve');
    }
    if (window.pageYOffset <= 133) {
      stickyBar.classList.remove('sticky');
      headerBar.classList.remove('stickyMauve');
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/variables';

#header {

  box-shadow: 0px 1px 50px -10px $dark-gray;

  .outer-mauve-bottom.stickyMauve {
    padding-bottom: 90px;
  }

  .sticky {
    box-shadow: 0px 1px 50px -10px $dark-gray;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  .outer-plum-bottom {
    background-color: $plum;
    padding-bottom: 10px;
    text-align: center;
  }

  .outer-mauve-bottom {
    background-color: $mauve;
    display: inline-flex;
    padding-bottom: 20px;
    width: 100%;
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

  %header-links {
    color: $white;
    font-size: 16px;
    font-weight: bold;
    margin: auto 15px;
    text-decoration: none;

    &:hover, &:focus, &:active {
      color: $dark-purple;
    }
  }

  .login-link > a {
    @extend %header-links;
    float: right;
  }

  .about-link > a {
    @extend %header-links;
    float: left;
  }

  .login-link-container {
    display: inline-block;
    position: relative;
    top: 10px;
  }

}

</style>



