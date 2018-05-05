import home_index from '../pages/index.vue';
import post_forum from '../components/postForum.vue';

export default [
  {
    path: '/home',
    name: 'home',
    redirect: {
      name: 'home_index'
    },
    component: resolve => require(['../app'], resolve),
    children: [
      {
        path: 'index',
        name: 'home_index',
        component: home_index
      },
      {
        path: 'postForum',
        name: 'post_forum',
        component: post_forum
      }
    ]
  }
]
