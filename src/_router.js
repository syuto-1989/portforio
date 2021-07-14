import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Output_json from '@/components/Output_json' //①import
import Profile from '@/components/Profile' //①import
import Skills_json from '@/components/Skills_json' //①import
import ImageList_json from '@/components/ImageList_json' //①import


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
      component: Output_json
    },
    {
       path: '/profile',
       name: 'Profile',
       component: Profile
     },
     {
        path: '/skills',
        name: 'Skills',
        component: Skills_json
      },
      {
         path: '/graphic',
         name: 'ImageList',
         component: ImageList_json
       }
  ]
})
