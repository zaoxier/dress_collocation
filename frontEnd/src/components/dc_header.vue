<template>
  <div class="header">
    <div class="person-center">
        <ul class="login-box">
          <li>
            <a href="#" class="login-link" @click="goLogin">
              <i class="icon"></i>
              登录
            </a>
          </li>
          <li>
            <a href="register" >注册</a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'dc_header',
  data() {
    return {
      showLogin: false,
    }
  },
  methods: {
    goLogin() {
      this.showLogin = true;
      this.$emit('showLoginBox', this.showLogin);
    }
  }
}
</script>

<style lang="less">
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1200;
  width: 100%;
  height: 44px;
  background-color: black;
  color: white;
  .person-center {
    display: inline;
    position: relative;
    float: right;
    margin: 0 20px 0 0;
    .login-box {
      float: right;
      line-height: 44px;
      height: 44px;
      border-left: 1px solid rgb(31, 25, 25);
      .login-link {
        width: 84px;
        height: 44px;
        line-height: 44px;
        .icon {
          display: inline-block;
          background: url("../assets/images/index/person.png");
          background-size: 15px 15px;
        }
      }
      li {
        float: left;
        width: 86px;
        height: 44px;
        line-height: 44px;
        border-left: 1px solid #200;
        border-right: 1px solid #220;
        text-align: center;
        a {
          color: white;
          font-size: 13px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>

