import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AuthGuard from './scripts/auth.guard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
      beforeEnter: (to, from, next) => {
        if (Vue.cookies.get('token')) {
          AuthGuard.authorize(Vue.cookies.get('token'))
          .then((res) => {
            if (res.data.success) {
              next({ name: 'home' });
            } else {
              Vue.cookies.remove('token');
              Vue.cookies.remove('user');
              next();
            }
          }).catch((err) => {
            Vue.cookies.remove('token');
            Vue.cookies.remove('user');
            next();
          });
        } else {
          next();
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('./views/Login.vue'),
      beforeEnter: (to, from, next) => {
        if (Vue.cookies.get('token')) {
          AuthGuard.authorize(Vue.cookies.get('token'))
          .then((res) => {
            if (res.data.success) {
              next({ name: 'home' });
            } else {
              Vue.cookies.remove('token');
              Vue.cookies.remove('user');
              next();
            }
          }).catch((err) => {
            Vue.cookies.remove('token');
            Vue.cookies.remove('user');
            next();
          });
        } else {
          next();
        }
      },
    },
    {
      path: '/new-listing',
      name: 'new-listing',
      component: () => import ('./views/NewListing.vue'),
      beforeEnter: (to, from, next) => {
        if (Vue.cookies.get('token')) {
          AuthGuard.authorize(Vue.cookies.get('token'))
          .then((res) => {
            if (res.data.success) {
              next();
            } else {
              Vue.cookies.remove('token');
              Vue.cookies.remove('user');
              next({ name: 'login'});
            }
          }).catch((err) => {
            Vue.cookies.remove('token');
            Vue.cookies.remove('user');
            next({ name: 'login'});
          });
        } else {
          next({ name: 'login' });
        }
      },
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import ('./views/Logout.vue'),
    },
    {
      path: 'item/:id',
      name: 'view-listing',
      component: () => import ('./views/Listing.vue'),
    }
  ],
});
