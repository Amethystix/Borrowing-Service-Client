<!-- Reusable button component -->
<template>
  <div v-bind:class="btnClass">
    <button type="submit" v-bind:id="btnId">
      <span>{{ label }}</span>
    </button>
  </div>
</template>

<script lang="ts">
export default class LButton extends Vue {
  @Prop() public btnClass: string;
  @Prop() public btnId: string;
  @Prop() public label: string;
}
</script>

<style lang="scss">
</style>
