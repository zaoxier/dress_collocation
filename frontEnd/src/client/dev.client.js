import axios from 'axios';
import router from '../router'
// 该opt为需要传递的参数，适当使用

// 此处声明开发环境LocalStorge常量，注意不能重复哦
const GUIDE_KEY = '__GUIDE__';
export default {
  // 数据请求
  request: (url, opt) => {
    return axios.get(url, opt)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        // TODO 弹窗
        console.log(err);
      });
  },

  setHeader: opt => {},
  activeButton: opt => {},
  showPswKeyboard: () => {},
  hidePswKeyboard: () => {},
  showCamera: opt => new Promise((resolve, reject) => resolve()),
  toScrolls: opt => {},
  getClientInfo: () => new Promise((resolve, reject) => resolve()),
  navigate: opt => {
    let fn = utils[opt.linkType];
    fn && typeof fn === 'function' && fn(opt);
  },
  goBack: (step = -1) => __Vue__.$router.go(step),

  closeBootUI: () => {},
  changeCity: opt => {},
  callPhone: opt => {},
  addCardToApplePay: opt => {
    return new Promise((resolve, reject) => resolve());
  },
  isSupportApplePay: () => {
    return new Promise((resolve, reject) => resolve());
  },
  addCardtoWallet: () => {
    return new Promise((resolve, reject) => resolve());
  }
};
