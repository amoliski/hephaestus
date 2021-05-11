import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Colors from '../views/Colors.vue';
import Navigation from '../views/Navigation.vue';
import Entry from '../views/Entry.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/colors',
    name: 'Colors',
    component: Colors,
  },
  {
    path: '/about_project',
    name: 'Colors',
    component: Colors,
  },
  {
    path: '/about_technology',
    name: 'Colors',
    component: Colors,
  },
  {
    path: '/shop',
    name: 'Colors',
    component: Colors,
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: Navigation,
  },
  {
    path: '/entry/:entry_name',
    name: 'Entry',
    component: Entry,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
