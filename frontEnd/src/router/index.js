import homePageRouter from '../modules/dc_homePage/router';
import homeRouter from '../modules/dc_index/router';

export default {
  routes: [
    ...homePageRouter,
    ...homeRouter,
    {
      path: '*',
      redirect: '/home/index'
    }
  ]
}
