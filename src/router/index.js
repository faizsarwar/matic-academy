import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: () => import(/* webpackChunkName: "about" */ '../views/how_it_works.vue')
    },
    {
      path: '/instructors',
      name: 'instructors',
      component: () => import(/* webpackChunkName: "about" */ '../views/Instructors.vue')
    },
    {
      path: '/private-1-on-1',
      name: '1-on-1',
      component: () => import(/* webpackChunkName: "about" */ '../views/1-on-1.vue')
    },
    {
      path: '/self-study',
      name: 'On-demand',
      component: () => import(/* webpackChunkName: "about" */ '../views/on-demand.vue')
    },
    {
      path: '/bootcamps',
      name: 'bootcamps',
      component: () => import(/* webpackChunkName: "about" */ '../views/bootcamps.vue')
    },
    {
      path: '/coding',
      name: 'coding',
      component: () => import(/* webpackChunkName: "about" */ '../views/coding.vue')
    },
    {
      path: '/investing',
      name: 'investing',
      component: () => import(/* webpackChunkName: "about" */ '../views/investing.vue')
    },
    {
      path: '/math',
      name: 'math',
      component: () => import(/* webpackChunkName: "about" */ '../views/math.vue')
    },
    {
      path: '/science',
      name: 'science',
      component: () => import(/* webpackChunkName: "about" */ '../views/science.vue')
    },
    {
      path: '/communication',
      name: 'communication',
      component: () => import(/* webpackChunkName: "about" */ '../views/communication.vue')
    },
    {
      path: '/review',
      name: 'review',
      component: () => import(/* webpackChunkName: "about" */ '../views/review.vue')
    },
]  



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
      next({ name: 'login', query: { to: to.path } });
    } else {
      next()
    }
  })
  
  export default router
  