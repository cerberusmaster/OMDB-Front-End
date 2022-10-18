import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import GuessingView from '../views/GuessingView.vue';
import ResultsView from '../views/ResultsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/guessing',
    name: 'guessing',
    component: GuessingView
  },
  {
      name: 'results',
      path: '/results',
      component: ResultsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
