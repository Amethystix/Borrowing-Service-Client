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
      <div v-for="result in mapReduceResult" class="result">
        <span class="result-text">UUID: {{ result.uuid }}</span>
        <span class="result-text">Rating: {{ result.rating }}</span>
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

  private mapReduceResult = new Array();
  private isLoading = false;

  callMapReduce() {
    this.isLoading = true;
    axios.get('http://localhost:3000/reviews/map-reduce')
      .then((res) => {
        for (const key in res.data) {
          this.mapReduceResult.push( { uuid: key, rating: res.data[key] });
        }
        console.log(this.mapReduceResult);
      }).catch((err) => {

      }).finally(() => {
        this.isLoading = false;
      });
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

  .result {
    border: 1px solid $mauve;
    padding: 10px;
  }

  .result-text {
    display: block;
    font-size: 16px;
  }

  @media (max-width: $tablet-screen) {
    .container {
      width: 100%;
    }
  }
}
</style>

