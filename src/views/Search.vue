<template>
  <div id="search">
    <div class="search-container">
    <div v-if="!isLoading">
      <div class="page-title" v-if="!allItems">There were {{ items.length }} results for {{ $route.params.itemName }}</div>
      <div class="page-title" v-if="allItems">Displaying all items</div>
      <div v-for="item of items">
        <SearchItem v-bind:name="item.name"
                    v-bind:ownerId="item.ownerId"
                    v-bind:owner="item.ownerUsername"
                    v-bind:description="item.description"
                    v-bind:zipCode="item.zipCode"
                    v-bind:itemId="item.objectId">
        </SearchItem>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import SearchItem from '@/components/shared/SearchItem.vue';
import axios from 'axios';

@Component({
  components: {
    SearchItem,
  },
})
export default class Search extends Vue {

  private items = [];
  private searchErr = false;
  private isLoading = true;
  private allItems = false;
  
  created (){
    const itemName = this.$route.params.itemName ? this.$route.params.itemName : '';
    let url = 'https://borrowing-svc-api.appspot.com/utils/search?itemName=';
    if (itemName === '') {
      this.allItems = true;
      url = 'https://borrowing-svc-api.appspot.com/utils/search';
    }
    axios.get(url + itemName)
      .then((res) => {
        this.items = res.data;
      }).catch((err) => {
        this.searchErr = true;
      }).finally(() => {
        this.isLoading = false;
      });
  }

  @Watch('$route')
  onRouteChange() {
    const itemName = this.$route.params.itemName ? this.$route.params.itemName : '';
    let url = 'https://borrowing-svc-api.appspot.com/utils/search?itemName=';
    if (itemName === '') {
      this.allItems = true;
      url = 'https://borrowing-svc-api.appspot.com/utils/search';
    } else {
      this.allItems = false;
    }
    axios.get(url + itemName)
      .then((res) => {
        this.items = res.data;
      }).catch((err) => {
        this.searchErr = true;
      }).finally(() => {
        this.isLoading = false;
      });
  }
}
</script>

<style lang="scss" scoped>

#search {

  .search-container {
    background-color: $white;
    box-sizing: border-box;
    margin: 50px;
    padding: 50px;
  }

  @media (max-width: $tablet-screen) {
    .search-container {
      margin: 50px 0;
    }
  }
}
</style>

