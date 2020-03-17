import Msiter from '$comt/Msiter'
import Sort from '$comt//Sort'
import Worth from '$comt//Worth'
import Shop from '$comt//Shop'
import Order from '$comt//Order'

export default [
  {
    title: '首页',
    icon: 'icon iconfont icon-zhuye',
    path: '/msiter',
    component: Msiter,
    exact: true
  },
  {
    title: '分类',
    icon: 'icon iconfont icon-guizi',
    path: '/sort',
    component: Sort,
    exact: true
  },
  {
    title: '值得买',
    icon: 'icon iconfont icon-picture',
    path: '/worth',
    component: Worth,
    exact: true
  },
  {
    title: '购物车',
    icon: 'icon iconfont icon-gouwuche',
    path: '/shop',
    component: Shop,
    exact: true
  },
  {
    title: '个人',
    icon: 'icon iconfont icon-ren-',
    path: '/order',
    component: Order,
    exact: true
  },
]