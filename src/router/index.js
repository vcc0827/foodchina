import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tst from '@/components/tst'
import demo from '@/components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/tst',
      name:'Tst',
      component:Tst,
    },
    {
      path:'/demo',
      name:'demo',
      component:demo,
    }
  ]
})
