<template>
<div class="outer-magenta">
    <div class="outer-purple">
      <div class="inner-purple">
      </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/variables';

.outer-magenta {
  background-color: $magenta;
  padding: 20px 0;
}

.outer-purple {
  background-color: $med-purple;
  padding: 20px 0;
}

.inner-purple {
  background-color: $dark-purple;
  padding: 30px 20px;
}

</style>



