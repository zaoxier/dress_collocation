import homePageRouter from '../modules/dc_homePage/router'

export default {
  routes: [
    ...homePageRouter,
    {
      path: '*',
      redirect: '/homePage/index'
    }
  ]
}
