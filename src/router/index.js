import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainCont from '@/components/maincont'
import IllnessCont from '@/components/illnesscont'
import ProductCont from '@/components/productcont'
import TradeCont from '@/components/tradecont'
import App from '@/App'
import Login from '@/components/login'
import IllDetails from '@/components/illdetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/app/:user',
      name: '/app',
      component: App,
      children: [
        {
          path: 'maincont',
          component: MainCont
        },
        {
          path: 'illnesscont',
          component: IllnessCont,
        },
        {
          path: 'productcont',
          component: ProductCont
        },
        {
          path: 'tradecont',
          component: TradeCont
        },
        {
          path: 'illdetails',
          component: IllDetails
        }
      ]
    },
    // {
    //   path: '/maincont',
    //   component: MainCont
    // },
    // {
    //   path: '/illnesscont',
    //   component: IllnessCont
    // },
    // {
    //   path: '/productcont',
    //   component: ProductCont
    // },
    // {
    //   path: '/tradecont',
    //   component: TradeCont
    // },
  ]
})
