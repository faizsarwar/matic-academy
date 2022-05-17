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
      path: '/blogs/:blogId',
      name: 'blog',
      component: () => import('../views/blog.vue')
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
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import(/* webpackChunkName: "about" */ '../views/help.vue')
    },
    {
      path: '/gift',
      name: 'gift',
      component: () => import(/* webpackChunkName: "about" */ '../views/gift.vue')
    },
    {
      path: '/employeers',
      name: 'employeers',
      component: () => import(/* webpackChunkName: "about" */ '../views/employeers.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import(/* webpackChunkName: "about" */ '../views/blogs.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "about" */ '../views/projects.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import(/* webpackChunkName: "about" */ '../views/terms.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: () => import(/* webpackChunkName: "about" */ '../views/course.vue')
    },
    {
      path: '/Learnosteam',
      name: 'Learnosteam',
      component: () => import(/* webpackChunkName: "about" */ '../views/Learnosteam.vue')
    },
    {
      path: '/diy-kits',
      name: 'diy-kits',
      component: () => import(/* webpackChunkName: "about" */ '../views/diy-kits.vue')
    },
    {
      path: '/makerspace',
      name: 'makerspace',
      component: () => import(/* webpackChunkName: "about" */ '../views/makerspace.vue')
    },
    {
      path: '/coding-for-kids',
      name: 'coding-for-kids',
      component: () => import(/* webpackChunkName: "about" */ '../views/coding-for-kids.vue')
    },
    {
      path: '/steam-camp',
      name: 'steam-camp',
      component: () => import(/* webpackChunkName: "about" */ '../views/steam-camp.vue')
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
  