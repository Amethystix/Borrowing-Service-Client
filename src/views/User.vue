<template>
  <div id="User">
    <div class="container">
      <div v-if="!isLoading">
        <div v-if="userExists">
          <div class="page-title">
            {{ username }}
          </div>
          <div class="page-text">
            <span v-if="objects.length > 0">
              This user has {{ objects.length }} listings up.
            </span>
            <span v-if="rating">
              This user has a rating of {{ rating }} / 5
            </span>
            <span v-if="!rating">
              This user has not yet been rated.
            </span>
            <span v-if="loggedIn && submittedRating === false" class="rating">
              Rate this user?
              <div class="rate">
                <button v-on:click="rate(1)">1</button>
                <button v-on:click="rate(2)">2</button>
                <button v-on:click="rate(3)">3</button>
                <button v-on:click="rate(4)">4</button>
                <button v-on:click="rate(5)">5</button>
              </div>
            </span>
            <span v-if="submittedRating" class="rating">
              Thanks for submitting your rating!
            </span>
            <span v-if="ratingError" class="error-msg">
              Your rating could not be submitted. Please try again.
            </span>
          </div>
          <div class="items" v-if="objects.length > 0">
            <div class="small-btn-wrapper left">
              <LButton btnClass="primary inline"
                      btnLabel="<"
                      v-on:buttonClick="previousObject()"
                      v-bind:isDisabled="disablePrevious"
                      btnId="previous-button">
              </LButton>
            </div>
            <div v-for="item in currentObjects" class="item">
              <router-link v-bind:to="'/item/' + item.objectId" class="item-name">
                {{ item.objectName }}
              </router-link>
              <div class="item-description">
                {{ item.description.length > 90 ? item.description.substring(0, 90) + '...' : item.description }}
              </div>
            </div>
            <div class="small-btn-wrapper right">
              <LButton btnClass="primary inline"
                      btnLabel=">"
                      v-on:buttonClick="nextObject()"
                      v-bind:isDisabled="disableNext"
                      btnId="next-button">
              </LButton>
            </div>
          </div>
          <div v-if="objects.length === 0">
            <div class="no-items">
              This user has not listed anything yet.
            </div>
          </div>
        </div>
        <div v-if="!userExists">
          <div class="page-title">
            404 Not Found
          </div>
          <div class="page-text not-found">
            We're sorry, but the user you're looking for doesn't exist.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LButton from '@/components/shared/LButton.vue';
import { Vue, Component, Watch } from 'vue-property-decorator';
import axios from 'axios';

@Component({
  components: {
    LButton,
  },
})
export default class User extends Vue {

  private userExists = false;
  private isLoading = true;
  private username!: string;
  private objects!: [any];
  private currentObjects = new Array();
  private index = 0;
  private disableNext = true;
  private disablePrevious = true;
  private rating!: number;
  private loggedIn!: boolean;
  private submittedRating = false;
  private ratingError = false;

  constructor() {
    super();
  }

  private rate(rating: number) {
    this.ratingError = false;
    const payload = {
      username: this.username,
      rating,
    };
    if (this.submittedRating) {
      this.ratingError = true;
    }
    axios.post('https://borrowing-svc-api.appspot.com/users/review', payload)
      .then((res) => {
        this.submittedRating = true;
      }).catch((err) => {
        this.ratingError = true;
      });
  }

  private previousObject() {
    if (!this.disablePrevious) {
      this.disableNext = false;
      this.index--;
      if (this.index === 0) {
        this.disablePrevious = true;
      }
      this.currentObjects = this.objects.slice(this.index, this.index + 3);
    }
  }

  private nextObject() {
    if (!this.disableNext) {
      this.disablePrevious = false;
      this.index++;
      if (this.index+3 === this.objects.length) {
        this.disableNext = true;
      }
      this.currentObjects = this.objects.slice(this.index, this.index+3);
    }
  }

  created() {
    this.loggedIn = this.$cookies.get('token') ? true : false;
    axios.get('https://borrowing-svc-api.appspot.com/users/view?userId=' + this.$route.params.id)
      .then((res) => {
        if (res.data.username) {
          this.rating = res.data.rating;
          this.username = res.data.username;
          this.objects = res.data.listedObjects;
          if (this.objects.length > 3) {
            this.currentObjects = this.objects.slice(0, 3);
            this.disableNext = false;
          } else {
            this.currentObjects = this.objects;
          }
          this.userExists = true;
        } else {
          this.userExists = false;
        }
      }).catch((err) => {
        this.userExists = false;
      }).finally(() => {
        this.isLoading = false;
      });
  }

  @Watch ('$route')
  onRouteChange() {
    this.loggedIn = this.$cookies.get('token') ? true : false;
    axios.get('https://borrowing-svc-api.appspot.com/users/view?userId=' + this.$route.params.id)
      .then((res) => {
        if (res.data.username) {
          this.rating = res.data.rating;
          this.username = res.data.username;
          this.objects = res.data.listedObjects;
          if (this.objects.length > 3) {
            this.currentObjects = this.objects.slice(0, 3);
            this.disableNext = false;
          } else {
            this.currentObjects = this.objects;
          }
          this.userExists = true;
        } else {
          this.userExists = false;
        }
      }).catch((err) => {
        this.userExists = false;
      }).finally(() => {
        this.isLoading = false;
      });
  }

}
</script>

<style lang="scss" scoped>

#User {

  .rating {
    margin-top: 10px;
  }

  .container {
    background-color: $white;
    box-sizing: border-box;
    color: $light-black;
    margin: 30px auto;
    padding: 50px;
    width: 750px;
  }

  .page-title {
    margin-bottom: 10px;
  }

  .item {
    background-color: $lavender;
    border: 2px solid $mauve;
    flex: 3 1 0;
    height: 150px;
    margin: 0 10px;
    padding: 10px;
    text-align: center;
  }

  .item-name {
    color: $white;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: $plum;
    }
  }

  .page-text {
    text-align: center;

    span {
      display: block;
    }
  }

  .small-btn-wrapper {
    flex: 1 1 0;
    margin: auto;
  }

  .items {
    display: inline-flex;
    margin: 40px auto;
    width: 100%;
  }

  .item-description {
    margin-top: 15px;
    text-align: left;
  }

  .not-found {
    font-size: 18px;
    padding: 50px 0 75px;
  }

  .no-items {
    font-size: 18px;
    padding: 30px 0 150px;
    text-align: center;
  }

  @media (max-width: $tablet-screen) {
    .container {
      width: 100%;
    }
  }

}

</style>
