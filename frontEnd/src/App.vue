<template>
	<div id="app">
    <dc-header @showLoginBox="showLogin"></dc-header>
			<router-view></router-view>
    <div v-show="showLo" class="login-modal"></div>
    <dc-login v-show="showLo"></dc-login>
	</div>
</template>

<script>
import DcHeader from './components/dc_header.vue';
import DcLogin from './components/dc_login.vue';

export default {
  name: 'app',
  data() {
    return {
      showLo: false
    }
  },
  components: {
    DcHeader,
    DcLogin
  },
  methods: {
    showLogin(data) {
      this.showLo = data;
    }
  }
}
</script>

<style>
@import "assets/css/font-awesome.min.css";
.login-modal {
  z-index: 200;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-out 0.2s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0);
  }
}
/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  background-color: #f1f2f7;
}
::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 4px;
}

::-moz-scrollbar {
  width: 6px;
  background-color: transparent;
}
::-moz-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 4px;
}
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
body {
  margin: 0px;
  padding: 0px;
  /* background: #1F2D3D; */
  /* font: 400 12px/1.5 "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial; */
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  width: 100%;
  min-width: 1200px;
  /* overflow: hidden; */
}

#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}

.el-submenu [class^="fa"] {
  vertical-align: baseline;
  margin-right: 10px;
}

.el-menu-item [class^="fa"] {
  vertical-align: baseline;
  margin-right: 10px;
}
</style>
