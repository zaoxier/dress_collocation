<template>
  <div class="moves">
    <el-tabs type="border-card">
      <el-tab-pane v-for="(item, index) in tabTitle"  :key="index" :label="item">
        <div class="dynamic" v-for="(item, index) in movesList" :key="index">
          <div class="head-square">
            <a><img src="../../../assets/images/bg1.jpg"></a>
          </div>
          <div class="dynamic-message">
            <p class="dynamic-message_title">
              <span>
                <a href="#">心境如水:</a>
              </span>
              <span>发表了一个帖子
                <a href="#">{{item.title}}</a>
              </span>
              <span>时间:{{item.datetime}}</span>
            </p>
            <p class="dynamic-message_content">{{item.detail}}</p>
            <p class="dynamic-message_pic"><img :src="item.pic" style="width: 100%; height: 100%;"></p>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "forum",
  data() {
    return {
      tabTitle: ['全部动态', '关于我的'],
      movesList: [
        {
          title: "一组昨天拍的西式婚礼",
          datetime: "3月7日",
          detail:
            "这对新人之前找我拍的婚纱，昨天能再次为他们拍婚礼我感到非常荣幸。婚礼的规模很小，也就到场了三十来位宾客，但这并不影响欢快喜庆的氛围，再加上天气很好（虽然大晴天拍户外对摄影师来说是个挑战），因此照片看起来充满幸福感。拍摄户外仪式我通常都是双机，一台挂24-70，一台挂70-200，以确保从大场景到特写都能拍到。结束之后会换上超广拍大合照。进到室内吃饭后要看现",
          pic: require("../../../assets/images/dress1.png")
        },
        {
          title: "一组昨天拍的西式婚礼",
          datetime: "3月7日",
          detail:
            "这对新人之前找我拍的婚纱，昨天能再次为他们拍婚礼我感到非常荣幸。婚礼的规模很小，也就到场了三十来位宾客，但这并不影响欢快喜庆的氛围，再加上天气很好（虽然大晴天拍户外对摄影师来说是个挑战），因此照片看起来充满幸福感。拍摄户外仪式我通常都是双机，一台挂24-70，一台挂70-200，以确保从大场景到特写都能拍到。结束之后会换上超广拍大合照。进到室内吃饭后要看现",
          pic: require("../../../assets/images/dress1.png")
        },
        {
          title: "一组昨天拍的西式婚礼",
          datetime: "3月7日",
          detail:
            "这对新人之前找我拍的婚纱，昨天能再次为他们拍婚礼我感到非常荣幸。婚礼的规模很小，也就到场了三十来位宾客，但这并不影响欢快喜庆的氛围，再加上天气很好（虽然大晴天拍户外对摄影师来说是个挑战），因此照片看起来充满幸福感。拍摄户外仪式我通常都是双机，一台挂24-70，一台挂70-200，以确保从大场景到特写都能拍到。结束之后会换上超广拍大合照。进到室内吃饭后要看现",
          pic: require("../../../assets/images/dress1.png")
        }
      ]
    };
  }
};
</script>

<style lang="less">
.moves {
  .el-tabs__content {
    padding: 0;
  }
  .dynamic {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px #e9e9e9 dashed;
    a {
      color: #39a6b1;
    }
    .head-square {
      display: inline-block;
      width: 52px;
      height: 52px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .dynamic-message {
      font-size: 14px;
      line-height: 24px;
      margin-left: 15px;
      width: 800px;
      p {
        margin-bottom: 15px;
      }
      &_title {
        span:last-child {
          float: right;
        }
      }
      &_content {
        height: 72px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        // -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      &_pic {
        height: 400px;
        width: 400px;
        border: 1px solid rgb(240, 236, 236);
      }
    }
  }
}
</style>
