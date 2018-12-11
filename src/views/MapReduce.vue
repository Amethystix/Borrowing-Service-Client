<template>
  <div id="MapReduce">
    <div class="container">
      <div class="page-title">
        MapReduce
      </div>
      <p class="page-text">
        This page contains a button that will start the MapReduce operation,
        and will return the results to this page and will format them in a readable way.
        Our MapReduce calculates the average rating for each user by taking reviews from 1-5,
        and reducing down to one average review-score per user.
      </p>
      <div class="btn-wrapper">
        <LButton btnClass="primary"
                 v-bind:btnLabel="isLoading ? 'Performing MapReduce' : 'Begin MapReduce'"
                 v-bind:spinning="isLoading"
                 btnId="mr-button"
                 v-bind:isDisabled="isLoading"
                 v-on:buttonClick="callMapReduce()">
        </LButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LButton from '@/components/shared/LButton.vue';
import axios from 'axios';

@Component({
  components: {
    LButton,
  }
})
export default class MapReduce extends Vue {

  private mapReduceResult = [];
  private isLoading = false;

  callMapReduce() {

  }
}

</script>

<style lang="scss" scoped>

#MapReduce {

  .container {
    background-color: $white;
    box-sizing: border-box;
    margin: 20px auto;
    padding: 50px;
    width: 650px;
  }

  @media (max-width: $tablet-screen) {
    .container {
      width: 100%;
    }
  }
}
</style>

