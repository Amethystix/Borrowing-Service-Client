<template>
  <div id="User">
    <div class="container">
      <div v-if="!isLoading">
        <div v-if="userExists">
          <div class="page-title">
            {{ username }}
          </div>
        </div>
        <div v-if="!userExists">
          <div class="page-title">
            404 Not Found
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import axios from 'axios';

export default class User extends Vue {

  private userExists!: boolean;
  private isLoading = true;
  private username!: string;
  private objects!: [any];

  @Watch ('$route')
  onRouteChange() {
    axios.get('http://localhost:3000/users/view?userId=' + this.$route.params.id)
      .then((res) => {
        console.log(res);
        if (res.data.username) {
          this.username = res.data.username;
          this.objects = res.data.listedObjects;
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

  private created() {
    axios.get('http://localhost:3000/users/view?userId=' + this.$route.params.id)
      .then((res) => {
        console.log(res);
        if (res.data.username) {
          this.username = res.data.username;
          this.objects = res.data.listedObjects;
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
  .container {
    background-color: $white;
    box-sizing: border-box;
    color: $light-black;
    margin: 30px auto;
    padding: 50px;
    width: 700px;
  }
}

</style>
