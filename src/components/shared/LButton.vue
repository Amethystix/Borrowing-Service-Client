<!-- Reusable button component -->
<template>
	<button type="submit" v-bind:id="btnId" v-bind:class="btnClass">
	  <span>{{ btnLabel }}</span>
	</button>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";

@Component
export default class LButton extends Vue {
  @Prop() private btnClass!: string;
  @Prop() private btnId!: string;
  @Prop() private btnLabel!: string;
}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/variables';

button {
  font-size: 16px;
  font-weight: 700;
  width: 100%;
}

.primary {
  background-color: $med-purple;
  border-bottom: 5px solid $magenta;
  border-radius: 5px;
  border-top: 5px solid $magenta;
  color: $white;
  padding: 15px 20px;

  &:hover {
    background-color: $dark-purple;
    border-color: $med-purple;
  }

  &:active {
    background-color: $magenta;
    border-color: $magenta;
  }

}
</style>
