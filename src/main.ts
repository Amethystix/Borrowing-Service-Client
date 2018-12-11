import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCookies from 'vue-cookies';
import './registerServiceWorker';
import AuthGuard from '@/scripts/auth.guard';

Vue.use(VueCookies);

Vue.config.productionTip = false;

const needAuth = [
  'new-listing',
  'logout',
];

const noAuth = [
  'login',
  'register',
];

router.beforeEach((to, from, next) => {
  if (Vue.cookies.get('token')) {
    AuthGuard.authorize(Vue.cookies.get('token'))
      .then((res) => {
        if (!res.data.success) {
          Vue.cookies.remove('token');
          Vue.cookies.remove('user');
          if (needAuth.includes(to.name ? to.name : 'home')) {
            next( { name: 'login' });
          } else {
            next();
          }
        } else {
          if (noAuth.includes(to.name ? to.name : 'home')) {
            next({ name: 'home' });
          } else {
            next();
          }
        }
      }).catch((err) => {
        Vue.cookies.remove('token');
        Vue.cookies.remove('user');
        if (needAuth.includes(to.name ? to.name : 'home')) {
          next({ name: 'login' });
        } else {
          next();
        }
      });
  } else {
    if (needAuth.includes(to.name ? to.name : 'home')) {
      next({ name: 'login' });
    } else {
      next();
    }
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
