import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Count from '@/components/Countvue'
import CountState from '@/components/Countstate'
import Mutations from '@/components/Countmutation'
import Getters from '@/components/Countgetters'
import Actions from '@/components/Countactions'
import Module from '@/components/Countmodule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/count',
      component:Count
    },
    {
      path:'/countState',
      component:CountState
    },
    {
      path:'/mutations',
      component:Mutations
    },
    {
      path:'/getters',
      component:Getters
    },
    {
      path:'/actions',
      component:Actions
    },
    {
      path:'/module',
      component:Module
    }
  ]
})
