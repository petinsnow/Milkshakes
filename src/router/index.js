import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NewOrder from '@/views/NewOrder'
import OrderList from '@/views/OrderList'
import OrderDetail from '@/views/OrderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/neworder/',
      name: 'NewOrder',
      component: NewOrder
    },
    {
      path: '/orderlist/',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/oderdetail/',
      name: 'OrderDetail',
      component: OrderDetail
    }
  ]
})
