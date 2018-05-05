<template>
  <div class="home-index">
    <!-- 卡片轮播 -->
    <carousel></carousel>
    <div class="forum-good">
      <div class="good-header"><h3>论坛精选</h3><div class="tip-line"><span></span></div></div>
      <ul class="good-list">
        <li v-for="(item, index) in goodList" :key="index">
          <a href="#"><div class="img-box"><img :src="rootPath+item.imgPath"></div></a>
          <div class="good-detail"><a href="#"><img :src="item.headImg"></a><a href="#">{{item.smallName}}</a>
          <span class="see">{{item.seeNum}}</span>
          <span class="message">{{item.messageNum}}</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 时装资讯 -->
    <md-list v-for="(item,index) of conList" :key="index" :item="item"></md-list>
    <div class="post"><el-button type="primary" icon="el-icon-edit el-icon--top" @click="goPostForum">发帖</el-button></div>
  </div>
</template>
<script>
import mdList from "../components/mdList.vue";
import carousel from "../components/carousel.vue";

export default {
  name: "index_content",
  data() {
    return {
      currentDate: "精彩",
      conList: [],
      rootPath,
      goodList: [{
        smallName: '我的一棵小小草',
        headImg: require('../../../assets/images/bg1.jpg'),
        imgPath: '/index/dress_coll2.png',
        seeNum: '120',
        messageNum: '14'
      },
      {
        smallName: '我的一棵小小草',
        headImg: require('../../../assets/images/bg1.jpg'),
        imgPath: '/index/dress_coll2.png',
        seeNum: '120',
        messageNum: '14'
      },
      {
        smallName: '我的一棵小小草',
        headImg: require('../../../assets/images/bg1.jpg'),
        imgPath: '/index/dress_coll2.png',
        seeNum: '120',
        messageNum: '14'
      },
      {
        smallName: '我的一棵小小草',
        headImg: require('../../../assets/images/bg1.jpg'),
        imgPath: '/index/dress_coll2.png',
        seeNum: '120',
        messageNum: '14'
      }]
    };
  },
  components: {
    mdList,
    carousel
  },
  created() {
    // let url = "/api/mdList.json";
    // client.request(url).then(
    //   res => {
    //     this.conList = res.body;
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  },
  methods: {
    goPostForum() {
      this.$router.push({ name: 'post_forum' });
    }
  }
};
</script>

<style lang="less">
.home-index {
  .forum-good {
    width: 90%;
    margin: 0 auto;
    max-width: 1800px;
    min-width: 1000px;
    .good-header {
      h3 {
        width: 100%;
        height: 50px;
        margin: 30px 0 10px 0;
        text-align: center;
        font: normal 28px/50px "Microsoft YaHei", Arial;
        color: #333;
      }
      .tip-line {
        display: flex;
        justify-content: center;
        span {
          width: 30px;
          height: 2px;
          background-color: #409eff;
          text-align: center;
        }
      }
    }
    .good-list {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      li {
        margin-right: 20px;
        box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2);
        .img-box {
          width: 300px;
          height: 200px;
          padding: 10px 0;
          border-bottom: 1px solid #e0e0e0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .good-detail {
          height: 50px;
          display: flex;
          align-items: center;
          & > a {
            padding-left: 5px;
          }
          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          .message {
            width: auto;
            height: 30px;
            margin-left: 10px;
            color: #999;
            font-size: 12px;
            line-height: 30px;
            background: url(../../../assets/images/index/talk_16.png) no-repeat
              left center;
            padding-left: 22px;
          }
          .see {
            width: auto;
            height: 30px;
            margin-left: 50px;
            color: #999;
            font-size: 12px;
            line-height: 30px;
            background: url(../../../assets/images/index/eye_16.png) no-repeat
              left center;
            padding-left: 26px;
          }
        }
      }
    }
  }
  .post {
    position: fixed;
    z-index: 100;
    right: 0;
    top: 50%;
    .el-button {
      padding: 15px 5px;
      font-size: 16px;
    }
  }
  .wonderful {
    width: 100%;
    height: 20%;
    .wonderful-imgContent {
      width: 200px;
      height: 200px;
      display: block;
    }
    .time {
      font-size: 13px;
      color: #999;
    }
    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 200px;
      height: 200px;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both;
    }
  }
}
</style>
