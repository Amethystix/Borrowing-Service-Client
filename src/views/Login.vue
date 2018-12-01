<template>
  <div id="login">
    <div class="login-container">
      <div class="page-title">Sign in to PalmTree</div>
      <div class="login-input">
        <input type="text"
               placeholder="Username"
               v-model="username.value"
               v-on:keyup="username.invalid=false"
               v-on:keyup.enter="submitForm()"
               v-on:blur="username.validate()"
               v-bind:class="username.invalid ? 'invalid' : 'valid'">
        <span v-if="username.invalid" class="error-msg">Please enter a valid username.</span>
      </div>
      <div class="login-input">
        <input type="password"
               placeholder="Password"
               v-model="password.value"
               v-on:keyup="password.invalid=false"
               v-on:keyup.enter="submitForm()"
               v-on:blur="password.validate()"
               v-bind:class="password.invalid ? 'invalid' : 'valid'">
        <span v-if="password.invalid" class="error-msg">Please enter a valid password.</span>
      </div>
      <div class="login-error error-msg" v-if="loginError">
        <span>The entered username and password combination could not be found.</span>
      </div>
      <div class="btn-wrapper">
        <LButton btnId="login-button"
                 btnClass="primary"
                 btnLabel="Log in"
                 v-on:buttonClick="submitForm()">
        </LButton>
      </div>
      <div class="signup-link-wrapper">
        <span class="signup-text">Don't have an account?</span>
        <router-link to="/register" class="signup-link">Sign up here.</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LButton from '@/components/shared/LButton.vue';

@Component({
  components: {
    LButton,
  },
})
export default class Login extends Vue {
  private username: any;
  private password: any;
  private loginError: boolean;

  constructor() {
    super();
    this.loginError = false;
    this.username = {
      invalid: false,
      value: '',
      validate: () => {
        this.username.invalid = this.username.value.length < 6 ? true : false;
      },
    };
    this.password = {
      invalid: false,
      value: '',
      validate: () => {
        this.password.invalid = this.password.value.length < 8 ? true : false;
      },
    };
  }

  submitForm() {
    // TODO: implement sending username val and password val
    this.username.validate();
    this.password.validate();
    if (!this.username.invalid && !this.password.invalid) {
      this.loginError = true;
    }
  }


}
</script>

<style lang="scss" scoped>

@import '../assets/stylesheets/variables';

#login {
  margin: auto;

  .error-msg {
    color: $error-red;
    font-size: 12px;
  }

  .login-error {
    text-align: center;
  }

  .login-input {
    margin: 15px auto;
    width: 80%;

    input {
      border-radius: 5px;
      border-style: solid;
      box-sizing: border-box;
      margin: auto;
      outline: none;
      padding: 15px;
      position: relative;
      width: 100%;
    }
    .valid {
      border-color: $dark-white;
    }
      
    .invalid {
      border-color: $error-red;
    }
  }

  .login-container {
    background-color: $white;
    box-sizing: border-box;
    margin: 40px auto;
    padding: 50px;
    width: 600px;
  }

  .btn-wrapper {
    margin: 30px auto;
    width: 50%;
  }

  .signup-link-wrapper{
    font-size: 14px;
    text-align: center;
  }

  .signup-link {
    color: $jordy-blue;
    display: inline-block;
    font-size: 14px;
    margin-left: 5px;

    &:visited {
      color: $lavender;
    }

    &:focus, &:hover {
      color: $plum;
    }
  }

  @media (max-width: $tablet-screen) {

    .login-container {
      width: 100%;
    }
  }
}
</style>
