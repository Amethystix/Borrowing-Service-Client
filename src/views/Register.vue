<template>
  <div id="register">
    <div class="register-container">
      <div class="page-title">Register</div>
      <!-- First name input -->
      <div class="pt-input">
        <input type="text"
               placeholder="First Name"
               ref="firstName"
               v-model="firstName.value"
               v-on:blur="firstName.validate()"
               v-on:keyup.enter="submitForm()"
               v-on:keyup="firstName.invalid = false"
               v-bind:class="firstName.invalid ? 'invalid' : 'valid'">
        <span v-if="firstName.invalid" class="error-msg">Please enter a valid first name</span>
      </div>
      <!-- Last name input -->
      <div class="pt-input">
        <input type="text"
               placeholder="Last Name"
               ref="lastName"
               v-model="lastName.value"
               v-on:blur="lastName.validate()"
               v-on:keyup.enter="submitForm()"
               v-on:keyup="lastName.invalid = false"
               v-bind:class="lastName.invalid ? 'invalid' : 'valid'">
        <span v-if="lastName.invalid" class="error-msg">Please enter a valid last name</span>
      </div>
      <!-- Username input -->
      <div class="pt-input">
        <input type="text"
               placeholder="Username"
               ref="username"
               v-model="username.value"
               v-bind:class="username.invalid ? 'invalid' : 'valid'"
               v-on:blur="username.validate()"
               v-on:keyup.enter="submitForm()"
               v-on:keyup="username.invalid = false">
        <span class="error-msg" v-if="username.invalid">Please enter a valid username</span>
      </div>
      <!-- Email input -->
      <div class="pt-input">
        <input type="text"
               placeholder="Email"
               ref="email"
               v-model="email.value"
               v-bind:class="email.invalid ? 'invalid' : 'valid'"
               v-on:blur="email.validate()"
               v-on:keyup="email.invalid = false"
               v-on:keyup.enter="submitForm()">
        <span class="error-msg" v-if="email.invalid">Please enter a valid email</span>
      </div>
      <!-- Password input -->
      <div class="pt-input">
        <input type="password"
               placeholder="Password"
               ref="password"
               v-model="password.value"
               v-bind:class="password.invalid ? 'invalid' : 'valid'"
               v-on:blur="password.validate()"
               v-on:keyup="password.invalid = false"
               v-on:keyup.enter="submitForm()">
        <span class="error-msg" v-if="password.invalid">Please enter a valid password</span>
      </div>
      <!-- Confirm password input -->
      <div class="pt-input">
        <input type="password"
               placeholder="Confirm Password"
               ref="confirmPassword"
               v-model="confirmPassword.value"
               v-bind:class="confirmPassword.invalid ? 'invalid' : 'valid'"
               v-on:blur="confirmPassword.validate()"
               v-on:keyup="confirmPassword.invalid = false"
               v-on:keyup.enter="submitForm()">
        <span class="error-msg" v-if="confirmPassword.invalid">Passwords either don't match, or are invalid</span>
      </div>

      <div class="btn-wrapper">
        <LButton btnId="register-btn"
                 btnClass="primary"
                 btnLabel="Register"
                 v-on:buttonClick="submitForm()">
        </LButton>
      </div>
      <div class="signup-link-wrapper">
        <span class="signup-text">Already have an account?</span>
        <router-link to="/login" class="signup-link">Sign in here</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LButton from '@/components/shared/LButton.vue';
import FormField from '@/interfaces/FormField';

@Component({
  components: {
    LButton,
  },
})
export default class Register extends Vue {

  private firstName!: FormField;
  private lastName!: FormField;
  private username!: FormField;
  private email!: FormField;
  private password!: FormField;
  private confirmPassword!: FormField;
  private formList!: FormField[];

  constructor() {
    super();
    this.formList = new Array();
    this.firstName = {
      value: '',
      invalid: false,
      validate: () => {
        this.firstName.invalid = this.firstName.value.length < 1 ? true : false;
      },
    };
    this.formList.push(this.firstName);
    this.lastName = {
      value: '',
      invalid: false,
      validate: () => {
        this.lastName.invalid = this.lastName.value.length < 1 ? true : false;
      },
    },
    this.formList.push(this.lastName);
    this.username = {
      value: '',
      invalid: false,
      validate: () => {
        this.username.invalid = this.username.value.length < 6 ? true : false;
      },
    };
    this.formList.push(this.username);
    this.email = {
      value: '',
      invalid: false,
      validate: () => {
        const emailRegEx = new RegExp(/\S+@\S+\.\S+/);
        this.email.invalid = this.email.value.length < 3 &&
          !emailRegEx.test(this.email.value) ? true : false;
      },
    };
    this.formList.push(this.email);
    this.password = {
      value: '',
      invalid: false,
      validate: () => {
        this.password.invalid = this.password.value.length > 7 ? false : true;
      },
    };
    this.formList.push(this.password);
    this.confirmPassword = {
      value: '',
      invalid: false,
      validate: () => {
        this.confirmPassword.invalid = this.confirmPassword.value === this.password.value
          && this.confirmPassword.value.length > 7 ? false : true;
        this.confirmPassword.invalid ? this.password.invalid = true : this.password.invalid = false;
      },
    };
    this.formList.push(this.confirmPassword);
  }


  private validateAll() {
    this.formList.forEach((val) => {
      val.validate();
    });
  }

  private focusOnFirstField() {
    const allRefs = this.$refs as {[key: string]: HTMLInputElement};
    if (this.firstName.invalid) {
      allRefs.firstName.focus();
    } else if (this.lastName.invalid) {
      allRefs.lastName.focus();
    } else if (this.username.invalid) {
      allRefs.username.focus();
    } else if (this.email.invalid) {
      allRefs.email.focus();
    } else if (this.password.invalid) {
      allRefs.password.focus();
    } else if (this.confirmPassword.invalid) {
      allRefs.confirmPassword.focus();
    }
  }

  private isFormValid() {
    return this.formList.filter((val) => val.invalid).length > 0;
  }

  private submitForm() {
    this.validateAll();
    if (this.isFormValid()) {
      const payload = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
        confirmPassword: this.confirmPassword.value,
      };
    } else {
      this.focusOnFirstField();
    }
  }
}
</script>

<style lang="scss">

@import '../assets/stylesheets/variables';

#register {
  margin: auto;

  .register-container {
    background-color: $white;
    box-sizing: border-box;
    margin: 30px auto;
    padding: 50px;
    width: 650px;
  }

  @media (max-width: $tablet-screen) {
    .register-container {
      width: 100%;
    }
  }
}
</style>
