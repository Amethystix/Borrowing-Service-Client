<template>
  <div id="home">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LButton from '@/components/shared/LButton.vue';

@Component({
  components: {
    LButton,
  },
})
export default class Home extends Vue {
  // Feed item mock
  public feedItems = [
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToitem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToitem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToitem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToitem: '#',
      owner: 'Henry',
    },
    {
      borrower: 'Sarah',
      itemName: 'Some Sugar',
      linkToitem: '#',
      owner: 'Henry',
    },
  ];
}
</script>

<style lang="scss" scoped>
#home {
  margin: 0;
}
</style>
