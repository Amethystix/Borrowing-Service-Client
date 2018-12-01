<!-- Reusable button component -->
<template>
	<button type="submit" v-on:click="buttonClick" v-bind:id="btnId" v-bind:class="btnClass">
	  <span>{{ btnLabel }}</span>
	</button>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';

@Component
export default class LButton extends Vue {
  @Prop() private btnClass!: string;
  @Prop() private btnId!: string;
  @Prop() private btnLabel!: string;

  buttonClick() {
    this.$emit('buttonClick');
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/variables';

button {
  border-style: solid;
  font-size: 16px;
  font-weight: 700;
  width: 100%;

  &:focus {
    outline: 0;
  }
}

.primary {
  background-color: $mauve;
  border-bottom: 5px solid $lavender;
  border-radius: 5px;
  border-top: 5px solid $lavender;
  box-sizing: border-box;
  color: $white;
  padding: 15px 20px;

  &:hover {
    background-color: $plum;
    border-color: $mauve;
    color: $dark-white;
  }

  &:active {
    background-color: $lavender;
    border-color: $mauve;
  }

  &:focus {
    box-shadow: 0px 1px 10px 1px $dark-purple;
  }
}

.search {
  background-color: $lavender;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  border-width: 0;
  color: $white;
  height: 100%;
  margin: 0;
  padding: 15px;
  width: auto;
  
  &:hover {
    background-color: $dark-purple;
  }
  
  &:active {
    background-color: $mauve;
  }

  &:focus {
    box-shadow: 0px 1px 10px 1px $dark-purple;
  }
}

</style>
