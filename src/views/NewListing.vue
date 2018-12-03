<template>
  <div id="new-listing">
    <div class="container">
      <div class="page-title">
        Add a new item
      </div>
      <div class="col-container">
        <div class="col-1 pt-input">
          <input type="text"
                 ref="name"
                 v-model="name.value"
                 v-bind:class="name.invalid ? 'invalid' : 'valid'"
                 placeholder="Item Name"
                 v-on:blur="name.validate()"
                 v-on:keyup.enter="submitForm()"
                 v-on:keypress="name.invalid=false"
                 v-on:keyup.delete="name.invalid=false">
        </div>
        <div class="col-1 pt-input">
          <input type="text"
                 ref="zipCode"
                 v-model="zipCode.value"
                 v-bind:class="zipCode.invalid ? 'invalid': 'valid'"
                 placeholder="Zip Code"
                 v-on:blur="zipCode.validate()"
                 v-on:keyup.enter="submitForm()"
                 v-on:keypress="zipCode.invalid=false"
                 v-on:keyup.delete="zipCode.invalid=false">
        </div>
      </div>
      <div class="col-container">
        <div class="col-2 pt-input">
          <textarea v-model="description.value"
                    placeholder="Description"
                    v-bind:class="description.invalid ? 'invalid' : 'valid'"
                    v-on:keyup="description.validate()"
                    v-on:blur="description.validate()"
                    v-on:keyup.enter="submitForm()">

          </textarea>
          <span v-bind:class="'char-remaining ' + (description.invalid ? 'error-msg' : '')">
            {{ 500 - description.value.length }} characters remaining
          </span>
        </div>
      </div>
      <div class="col-container">
        <div class="col-2 pt-input">
          <input type="file"
                 id="file"
                 ref="file"
                 v-on:change="uploadFile()">
        </div>
      </div>
      <div class="btn-wrapper">
        <LButton btnId="listing-btn"
                 btnClass="primary"
                 btnLabel="Add Listing"
                 v-on:buttonClick="submitForm()">
        </LButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FormField from '@/interfaces/FormField';
import LButton from '@/components/shared/LButton.vue';

@Component({
  components: {
    LButton,
  }
})
export default class NewListing extends Vue {
  private name: FormField;
  private description: FormField;
  private zipCode: FormField;
  private file!: File;
  private allRefs = this.$refs as {[key: string]: HTMLInputElement};

  constructor() {
    super();

    this.name = {
      invalid: false,
      value: '',
      validate: () => {
        this.name.invalid = this.name.value.length > 22 ? false : true;
      }
    };
    this.description = {
      invalid: false,
      value: '',
      validate: () => {
        this.description.invalid = this.description.value.length > 500;
      }
    };
    this.zipCode = {
      invalid: false,
      value: '',
      validate: () => {
        this.zipCode.invalid = !/^\d{5}(-\d{4})?$/.test(this.zipCode.value);
      }
    };
  }
  
  private submitForm() {

  }

  private uploadFile() {
    if (this.allRefs.file.files) {
      this.file = this.allRefs.file.files[0];
    }
  }
}
</script>

<style lang="scss" scoped>
#new-listing {

  .container {
    background-color: $white;
    box-sizing: border-box;
    margin: 25px auto;
    padding: 50px;
    width: 700px;
  }

  .col-1, .col-2 {
    margin: 0 10px;
  }

  .col-container {
    margin: 15px auto;
  }

  textarea {
    height: 150px;
  }

  .char-remaining {
    color: $faded-gray;
    font-size: 14px;
  }

  .char-remaining.error-msg {
    color: $error-red;
  }

  @media (max-width: $tablet-screen) {
    .container {
      width: 100%;
    }
  }
}
</style>

