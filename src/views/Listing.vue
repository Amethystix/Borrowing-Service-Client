<template>
  <div id="listing">
    <div class="container" v-if="!isLoading">
        <div v-if="listingExists" class="listing-container">
          <div class="page-title">
            {{ listingObj.name }}
          </div>
          <div class="user-text">
            Posted by {{ listingObj.ownerUsername }} located at {{ listingObj.zipCode }}
          </div>
          <div class="col-container">
            <!-- TODO: add images -->
            <div class="col-1">
              <div class="image">
              </div>
            </div>
            <div class="item-description col-2 page-text">
              {{ listingObj.description }}
            </div>
          </div>
          <div class="btn-wrapper">
            <LButton btnId="borrow"
                     btnClass="primary"
                     v-bind:spinning="isBorrowing"
                     v-bind:btnLabel="listingObj.isReserved ? 'Currently unavailable' : 'Request to borrow'"
                     v-bind:isDisabled="listingObj.isReserved || isBorrowing"
                     v-on:buttonClick="borrow()">
            </LButton>
            <div v-if="borrowError" class="error-msg">
              This item cannot be borrowed at this time.
            </div>
          </div>
        </div>
        <div v-if="!listingExists" class="listing-container">
          <div class="page-title">
            404 Not Found
          </div>
          <div class="page-text not-found">
              Sorry, but we couldn't find the item you're looking for.
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import ListingItem from '@/interfaces/ListingItem';
import axios from 'axios';
import LButton from '@/components/shared/LButton.vue';

@Component({
  components: {
    LButton,
  },
})
export default class Listing extends Vue {

  private listingObj!: ListingItem;
  private isLoading = true;
  private listingExists = false;
  private isBorrowing = false;
  private borrowError = false;

  public created() {
    axios.get('https://borrowing-svc-api.appspot.com/item/view?id=' + this.$route.params.id)
      .then((res) => {
        if (res.data.name) {
          const {
            name, ownerUsername, description, zipCode, isReserved, ownerId,
          } = res.data;
          this.listingObj = {
            name,
            ownerUsername,
            ownerId,
            description,
            zipCode,
            isReserved: isReserved === 0 ? false : true,
          };
          this.listingExists = true;
        } else {
          this.listingExists = false;
        }
      }).catch((err) => {
        this.listingExists = false;
      }).finally(() => {
        this.isLoading = false;
      });
  }

  @Watch ('$route')
  onRouteChange() {
    axios.get('https://borrowing-svc-api.appspot.com/item/view?id=' + this.$route.params.id)
      .then((res) => {
        if (res.data.name) {
          const {
            name, ownerUsername, description, zipCode, isReserved, ownerId,
          } = res.data;
          this.listingObj = {
            name,
            ownerUsername,
            ownerId,
            description,
            zipCode,
            isReserved: isReserved === 0 ? false : true,
          };
          this.listingExists = true;
        } else {
          this.listingExists = false;
        }
      }).catch((err) => {
        this.listingExists = false;
      }).finally(() => {
        this.isLoading = false;
      });
  }

  borrow() {
    this.borrowError = false;
    const payload = {
      itemId: this.$route.params.id,
    };
    const headers = {
      Authorization: this.$cookies.get('token'),
    }
    this.isBorrowing = true;
    axios.post('https://borrowing-svc-api.appspot.com/item/borrow', payload, { headers })
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        this.borrowError = true;
      }).finally(() => {
        this.isBorrowing = false;
      })
  }


}
</script>

<style lang="scss" scoped>

#listing {

  .item-description {
    margin: auto 15px;
  }

  .image {
    background-color: $faded-gray;
    background-image: url('../assets/images/noImage.png');
    background-size: contain;
    height: 150px;
    width: 150px;
  }

  .container {
    background-color: $white;
    box-sizing: border-box;
    color: $light-black;
    margin: 30px auto;
    padding: 50px;
    width: 700px;
  }

  .user-text {
    font-size: 16px;
    margin: 10px auto;
    text-align: center;
  }

  .col-container {
    margin-top: 50px;
  }

  .btn-wrapper {
    margin-top: 50px;
  }

  .page-title {
    margin: auto;
  }

  .page-text.not-found {
    font-size: 24px;
    padding: 50px;
  }

  .listing-container {
    margin: auto;
  }

  @media (max-width: $tablet-screen) {
    .container {
      width: 100%;
    }
  }
}
</style>