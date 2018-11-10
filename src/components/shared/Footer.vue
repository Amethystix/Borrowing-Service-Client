<template>
    <div id="footer">
      <div class="outer-magenta">
        <div class="outer-purple">
          <div class="inner-purple">
            <span class="copyright">&copy; The PalmTree team 2018</span>
            <div class="links">
              <!--TODO: add some cute links with v-for directive-->
              <span>Like the project?  Check out our GitHub!</span>
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
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/variables';

#footer {

  bottom: 0;
  position: absolute;
  width: 100%;

  .outer-magenta {
    background-color: $magenta;
    box-shadow: 0 0 50px -10px $black;
    padding-top: 20px;
  }

  .outer-purple {
    background-color: $med-purple;
    padding-top: 20px;
  }

  .inner-purple {
    background-color: $dark-purple;
    padding: 30px;
    text-align: center;
  }

  .copyright {
    color: $white;
    float: left;
    font-size: 18px;
  }

  .links {
    color: $white;
    float: right;
    font-size: 18px;
  }
}
</style>
