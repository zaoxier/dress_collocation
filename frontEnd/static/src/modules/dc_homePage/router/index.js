import homePage_index from '../pages/homePage.vue'
export default [{
  path: '/homePage',
  name: 'home_page',
  redirect: {
    name: 'homePage_index'
  },
  component: resolve => require(['../app'], resolve),
  children: [{
    path: 'index',
    name: 'homePage_index',
    component: homePage_index
  }]
}]
