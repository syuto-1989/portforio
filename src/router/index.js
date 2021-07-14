import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Output from '@/components/Output' //①import
import Profile from '@/components/Profile' //①import

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

//②profile
 {
    path: '/outputs',
    name: 'Output',
    component: Output
  },
  {
     path: '/profile',
     name: 'Profile',
     component: Profile
   }
]

const router = new VueRouter({
  routes
})

export default router
