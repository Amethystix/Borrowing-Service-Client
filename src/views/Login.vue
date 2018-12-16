<template>
  <div id="login">
    <div class="login-container">
      <div class="page-title">Sign in to PalmTree</div>
      <div class="pt-input">
        <input type="text"
               placeholder="Username"
               ref="username"
               v-model="username.value"
               v-on:keypress="resetValidation('username')"
               v-on:keyup.delete="resetValidation('username')"
               v-on:keyup.enter="submitForm()"
               v-on:blur="username.validate()"
               v-bind:class="username.invalid ? 'invalid' : 'valid'">
        <span v-if="username.invalid" class="error-msg">Please enter a valid username.</span>
      </div>
      <div class="pt-input">
        <input type="password"
               placeholder="Password"
               ref="password"
               v-model="password.value"
               v-on:keypress="resetValidation('password')"
               v-on:keyup.delete="resetValidation('password')"
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
                 v-bind:spinning="loading"
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
import FormField from '@/interfaces/FormField';
import axios from 'axios';

@Component({
  components: {
    LButton,
  },
})
export default class Login extends Vue {
  private username: FormField;
  private password: FormField;
  private loginError: boolean;
  private loading = false;

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

  private submitForm() {
    this.loginError = false;
    this.username.validate();
    this.password.validate();
    if (!this.username.invalid && !this.password.invalid) {
      this.loading = true;
      const payload = {
        username: this.username.value,
        password: this.password.value,
      };
      axios.post('https://borrowing-svc-api.appspot.com/users/login', payload)
        .then((res) => {
          if (res.data.token) {
            this.$cookies.set('token', res.data.token, undefined, undefined, 'localhost');
            this.$cookies.set('user', res.data.userObj, undefined, undefined, 'localhost');
            this.$router.push('/');
          } else {
            this.loginError = true;
          }
        }).catch((err) => {
          this.loginError = true;
        }).finally(() => {
          this.loading = false;
        });
    } else if (this.username.invalid) {
      const usernameInput = this.$refs.username as HTMLInputElement;
      usernameInput.focus();
    } else {
      const passwordInput = this.$refs.password as HTMLInputElement;
      passwordInput.focus();
    }
  }

  private resetValidation(formField: string) {
    if (formField === 'username') {
      this.username.invalid = false;
    } else if (formField === 'password') {
      this.password.invalid = false;
    }
    this.loginError = false;
  }

}
</script>

<style lang="scss" scoped>

@import '../assets/stylesheets/variables';

#login {
  margin: auto;

  .login-error {
    text-align: center;
  }

  .login-container {
    background-color: $white;
    box-sizing: border-box;
    margin: 40px auto;
    padding: 50px;
    width: 600px;
  }

  @media (max-width: $tablet-screen) {

    .login-container {
      width: 100%;
    }
  }
}
</style>
