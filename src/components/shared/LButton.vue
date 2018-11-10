<!-- Reusable button component -->
<template>
	<button type="submit" v-bind:id="btnId" v-bind:class="btnClass">
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
}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/variables';

button {
  font-size: 16px;
  font-weight: 700;

  &:focus {
    outline: 0;
  }
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

  &:focus {
    box-shadow: 0px 1px 10px 1px $dark-purple;
  }
}

.search {
  background-color: $white;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  color: $dark-purple;
  height: 100%;
  padding: 11px;
  width: auto;
  
  &:hover {
    background-color: $med-purple;
  }
  
  &:active {
    background-color: $magenta;
  }

  &:focus {
    box-shadow: 0px 1px 10px 1px $dark-purple;
  }
}

</style>
