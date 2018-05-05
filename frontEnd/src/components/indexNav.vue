<template>
  <div class="index-nav">
    <!-- 栏目,帖子类别-->
    <div class="index-tab">
      <div class="searchBox">
        <input type="text" id="searchValue" placeholder="搜索帖子标题" />
        <button class="btn" id="search" type="button">&nbsp;</button>
      </div>
      <div class="logo"><a href="#"><img src="../assets/images/index/dc_logo.png"></a></div>
      <ul class="menu">
        <li class="map">
          <a href="#" @click="showMapList">版块导航</a>
          <div class="mapBox">
            <ul class="maplist">
              <li>
                <i>&nbsp;</i>
                <span>场景搭配</span>
              </li>
              <li>
                <i>&nbsp;</i>
                <span>季节</span>
              </li>
              <li>
                <i>&nbsp;</i>
                <span>时装秀场</span>
              </li>
              <li>
                <i>&nbsp;</i>
                <span>时尚街拍</span>
              </li>
              <li>
                <i>&nbsp;</i>
                <span>风格创造</span>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">精华</a>
        </li>
        <li>
          <a href="#">标签</a>
        </li>
        <li>
          <a href="#">图库</a>
        </li>
        <li>
          <a href="#">活动</a>
        </li>
      </ul>
    </div>
    <div class="goTop" style="display: none;"></div>
  </div>
</template>

<script>
export default {
  name: "indexNav",
  data() {
    return {
      // showLogin: false,
    }
  },
  methods: {
    showMapList() {
      document.getElementsByClassName("mapBox")[0].style.display = "block";
      console.log(document.getElementsByClassName("mapBox")[0]);
    }
  }
};
</script>

<style lang="less">
.index-nav {
  .index-tab {
    width: 100%;
    height: 70px;
    margin-top: 44px;
    border-bottom: 1px solid rgb(220, 224, 228);
    .searchBox {
      width: 250px;
      height: 30px;
      margin-top: 20px;
      border: 1px solid rgb(219, 213, 213);
      border-radius: 15px;
      float: right;
      input {
        width: 190px;
        line-height: 24px;
        height: 24px;
        text-indent: 10px;
        margin: 3px 0 0 12px;
        font-size: 14px;
        float: left;
        outline: 0;
        border: 0;
      }
      .btn {
        width: 32px;
        height: 32px;
        border: 0;
        background: url("../assets/images/index/search_32.png") no-repeat center
          center;
      }
    }
    .logo {
      padding: 5px 0 5px 200px;
      width: 150px;
      height: 50px;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .menu {
      width: 52%;
      height: 60px;
      text-align: center;
      & > li {
        float: left;
        margin: 0 3%;
        & > a {
          float: left;
          line-height: 60px;
          padding: 0 10px;
          font-size: 18px;
          text-decoration: none;
          color: rgba(0, 0, 0, 0.8);
          &:hover {
            color: rgba(109, 184, 214, 0.8);
          }
        }
      }
      .map {
        position: relative;
        a {
          &:after {
            content: "";
            display: inline-block;
            width: 16px;
            height: 16px;
            background: url("../assets/images/index/downArrow.png") no-repeat
              center right;
            background-size: 16px 16px;
          }
        }
        .mapBox {
          display: none;
          z-index: 10;
          position: absolute;
          left: 0;
          top: 84px;
          .maplist {
            & > li {
              width: 150px;
              height: 100px;
              & > i {
                width: 3px;
                height: 100px;
                background: rgb(32, 191, 219);
                float: left;
              }
            }
          }
        }
      }
    }
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    li {
      margin: 0;
      padding: 0;
      float: left;
    }
  }
}
</style>


