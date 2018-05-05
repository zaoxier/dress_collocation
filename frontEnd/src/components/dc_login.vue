<template>
  <div class="login">
    <div class="forum-logo">
      <div class="logo-box"><img src="../assets/images/index/dc_logo.png"></div>
      <p>让好的衣着打扮增添您的美</p>
      <div class="close-btn"></div>
    </div>
    <div class="form">
      <a href="#">短信快速登录</a>
      <div class="account-psw">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item  prop="username">
            <el-input type="phone" placeholder="请输入用户名" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"></el-input>
          </el-form-item>
          </el-form>
          <el-checkbox v-model="checkedRemenber">记住我</el-checkbox>
          <a class="forget-psw">忘记密码？</a>
        </div>
        <div class="phone-text">
        </div>
        <el-button class="login-btn" type="danger"  @click="loginBtn('ruleForm')">登录</el-button>
    </div>
    <h4 class="fenge">
      <hr>
      <b>第三方登录</b>
    </h4>
    <div class="login-share-box">
      <a href="#" class="weibo-icon"></a>
       <a href="#" class="qq-icon"></a>
       <a href="#" class="weixin-icon"></a>
    </div>
  </div>
</template>

<script>
  import http from '../assets/js/http'
  // import moment from 'moment'
  // import Lockr from 'lockr'
  // import Cookies from 'js-cookie'
  // import _g from '@/assets/js/global'
  // import config from '@/assets/js/config.js'

export default {
  name: "dc_login",
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checkedRemenber: false,
    }
  },
  methods: {
    // loginBtn(ruleForm){
    loginBtn(ruleForm) {
         this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            // 登录表单数据
            let data = {};
            data.account = this.ruleForm.username;
            data.password = this.ruleForm.password;
            if(this.checkedRemenber) {
              data.isRemenber = 1;
            }else {
              data.isRemenber = 0;
            }
            // 异步请求
            this.apiPost('user/base/login', data).then(res => {
              if(res.code !== 200) {
                this.handleError(res);
              }else {
                if(this.checkedRemenber) {
                  // 将会话存储密码，期限一周
                  Cookies.set('remenberPsw', true, {expires: 1});
                }
                 _g.toastMsg('success', '登录成功');
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  },
  mixins: [http]
};
</script>

<style lang="less">
.login {
  width: 430px;
  height: 530px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -265px 0 0 -215px;
  background: #fff;
  z-index: 10001;
  border-radius: 6px;
  overflow: hidden;
  .forum-logo {
    background-color: #c8f8fc;
    height: 80px;
    display: flex;
    align-items: center;
    .logo-box {
      width: 150px;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .close-btn {
      position: absolute;
      top: 0;
      right: 0;
      width: 16px;
      height: 16px;
      background-color: black;
    }
  }
  .fenge {
  }
  .login-share-box {
    display: flex;
    justify-content: center;
    .weibo-icon {
      margin-right: 30px;
      width: 48px;
      height: 48px;
      background: url("../assets/images/index/weibo.png");
      &:hover {
        background: url("../assets/images/index/weibo_48.png");
      }
    }
    .qq-icon {
      margin-right: 30px;
      width: 48px;
      height: 48px;
      background: url("../assets/images/index/qq.png") no-repeat;
      &:hover {
        background: url("../assets/images/index/qq_48.png") no-repeat;
      }
    }
    .weixin-icon {
      width: 55px;
      height: 48px;
      background: url("../assets/images/index/weixin.png") no-repeat;
      &:hover {
        background: url("../assets/images/index/weixin_48.png") no-repeat;
      }
    }
  }
  .form {
    padding: 30px 40px 0 40px;
    .login-btn {
      width: 100%;
      height: 50px;
      background-color: #ff4b4b;
      margin: 20px 0 0 0;
      font-size: 16px;
      color: #fff;
    }
    a {
      float: right;
      padding-bottom: 5px;
      &:hover {
        color: #ff4b4b;
      }
    }
    .el-form {
      .el-form-item {
        .el-form-item__content {
          margin: 0 !important;
        }
      }
    }
    .account-psw {
      .forget-psw {
        font-size: 12px;
      }
      .el-checkbox {
        padding-bottom: 5px;
      }
    }
    .phone-psw {
    }
  }
}
</style>


