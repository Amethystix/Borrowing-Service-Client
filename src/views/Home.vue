<template>
  <div class="home">
    <Header></Header>
    <div class="btn-wrapper">
      <LButton btnClass="primary" btnLabel="Button!" btnId="button-id"></LButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import LButton from "@/components/shared/LButton.vue";
import Header from '@/components/shared/Header.vue';

@Component({
  components: {
    HelloWorld,
    LButton,
    Header,
  },
})
export default class Home extends Vue {}
</script>
