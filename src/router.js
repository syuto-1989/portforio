import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Output from '@/components/Output_json' //①import
import Profile from '@/components/Profile' //①import
import Skills from '@/components/Skills_json' //①import
import ImageList from '@/components/ImageList' //①import


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
     },
     {
        path: '/skills',
        name: 'Skills',
        component: Skills
      },
      {
         path: '/graphic',
         name: 'ImageList',
         component: ImageList
       }
  ]
})
