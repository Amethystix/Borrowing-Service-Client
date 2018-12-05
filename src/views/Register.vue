<template>
  <div id="register">
    <div class="register-container">
      <div class="page-title">Register</div>
      <div class="col-container">
        <!-- First name input -->
        <div class="pt-input col-1">
          <input type="text"
                placeholder="First Name"
                ref="firstName"
                v-model="firstName.value"
                v-on:blur="firstName.validate()"
                v-on:keyup.enter="submitForm()"
                v-on:keyup.delete="resetField(firstName)"
                v-on:keypress="resetField(firstName)"
                v-bind:class="firstName.invalid ? 'invalid' : 'valid'">
          <span v-if="firstName.invalid" class="error-msg">Please enter a valid first name</span>
        </div>
        <!-- Last name input -->
        <div class="pt-input col-1">
          <input type="text"
                placeholder="Last Name"
                ref="lastName"
                v-model="lastName.value"
                v-on:blur="lastName.validate()"
                v-on:keyup.enter="submitForm()"
                v-on:keyup.delete="resetField(lastName)"
                v-on:keypress="resetField(lastName)"
                v-bind:class="lastName.invalid ? 'invalid' : 'valid'">
          <span v-if="lastName.invalid" class="error-msg">Please enter a valid last name</span>
        </div>
      </div>
      <!-- Username input -->
      <div class="col-container">
        <div class="pt-input col-2">
          <input type="text"
                placeholder="Username"
                ref="username"
                v-model="username.value"
                v-bind:class="username.invalid ? 'invalid' : 'valid'"
                v-on:blur="username.validate()"
                v-on:keyup.enter="submitForm()"
                v-on:keyup.delete="resetField(username)"
                v-on:keypress="resetField(username)">
          <span class="error-msg" v-if="username.invalid">Please enter a valid username</span>
        </div>
      </div>
      <!-- Email input -->
      <div class="col-container">
        <div class="pt-input col-2">
          <input type="text"
                placeholder="Email"
                ref="email"
                v-model="email.value"
                v-bind:class="email.invalid ? 'invalid' : 'valid'"
                v-on:blur="email.validate()"
                v-on:keyup.delete="resetField(email)"
                v-on:keypress="resetField(email)"
                v-on:keyup.enter="submitForm()">
          <span class="error-msg" v-if="email.invalid">Please enter a valid email</span>
        </div>
      </div>
      <!-- Password input -->
      <div class="col-container">
        <div class="pt-input col-1">
          <input type="password"
                placeholder="Password"
                ref="password"
                v-model="password.value"
                v-bind:class="password.invalid ? 'invalid' : 'valid'"
                v-on:blur="password.validate()"
                v-on:keyup.delete="resetField(password)"
                v-on:keypress="resetField(password)"
                v-on:keyup.enter="submitForm()">
          <span class="error-msg" v-if="password.invalid">Please enter a valid password</span>
        </div>
        <!-- Confirm password input -->
        <div class="pt-input col-1">
          <input type="password"
                placeholder="Confirm Password"
                ref="confirmPassword"
                v-model="confirmPassword.value"
                v-bind:class="confirmPassword.invalid ? 'invalid' : 'valid'"
                v-on:blur="confirmPassword.validate()"
                v-on:keyup.delete="resetField(confirmPassword)"
                v-on:keypress="resetField(confirmPassword)"
                v-on:keyup.enter="submitForm()">
          <span class="error-msg" v-if="confirmPassword.invalid">Passwords either don't match, or are invalid</span>
        </div>
      </div>

      <div class="btn-wrapper">
        <LButton btnId="register-btn"
                 btnClass="primary"
                 btnLabel="Register"
                 v-bind:spinning="isLoading"
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
import axios from 'axios';

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
  private isLoading: boolean;
  private registerError = false;

  constructor() {
    super();
    this.isLoading = false;
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

  /**
   * Calls validate on each FormField
   */
  private validateAll() {
    this.formList.forEach((val) => {
      val.validate();
    });
  }

  /**
   * On change of a field, will trigger this function that resets the field's validity
   * until it is finished being edited, and sets register error to false since
   * the newly input data should be different if prior data failed registration
   */
  private resetField(field: FormField) {
    field.invalid = false;
    this.registerError = false;
  }

  /**
   * Provides a nice way to focus on an invalid field's native element
   */
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

  /**
   * Checks the validity of all form fields
   */
  private isFormValid() {
    return this.formList.filter((val) => val.invalid).length === 0;
  }

  /**
   * Submits the registration form with a post request to register endpoint.
   *
   * On success, will return a token and stores the token in a cookie, redirecting
   * to the front page as a logged in user.
   *
   * On failure, will display an error message on the ui
   */
  private submitForm() {
    this.validateAll();
    // If the form is valid, try to create user.
    // Prevents multiple bad attempts & malformed requests.
    if (this.isFormValid() && !this.registerError) {
      // Set spinner to true
      this.isLoading = true;
      // Form payload
      const payload = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
        confirmPassword: this.confirmPassword.value,
      };
      axios.post('http://localhost:3000/users/register', payload)
        .then((res) => {
          if (res.data.token) {
            // Set the cookies
            this.$cookies.config('24h', 'localhost');
            this.$cookies.set('token', res.data.token, 'localhost');
            this.$cookies.set('user', res.data.userObj, 'localhost');
            this.$router.push('/');
          } else {
            this.registerError = true;
          }
        }).catch((err) => {
          this.registerError = true;
        }).finally(() => {
          // Stop spinner when finished
          this.isLoading = false;
        });
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

  .col-1, .col-2 {
    margin: 0 10px;
  }

  .col-container {
    margin: 15px auto;
  }

  @media (max-width: $tablet-screen) {
    .register-container {
      width: 100%;
    }
  }
}
</style>
