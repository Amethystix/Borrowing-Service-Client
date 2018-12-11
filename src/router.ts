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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('./views/Login.vue'),
    },
    {
      path: '/new-listing',
      name: 'new-listing',
      component: () => import ('./views/NewListing.vue'),
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import ('./views/Logout.vue'),
    },
    {
      path: '/item/:id',
      name: 'view-listing',
      component: () => import ('./views/Listing.vue'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import ('./views/User.vue'),
    },
  ],
});
