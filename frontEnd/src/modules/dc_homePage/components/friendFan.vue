<template>
  <div class="friendFan-box">
    <el-tabs type="border-card">
      <el-tab-pane :label="'关注'">
        <div class="friend-box">
          <div class="my-friend">
            <ul>
              <li v-for="(item, index) in 17" :key="index">
                <div class="sm-head-box">
                  <a href="#"><img src="../../../assets/images/bg1.jpg"></a>
                </div>
                <div class="fofpop-box">
                  <p>
                    <a href="#">nickname心静如水</a>
                  </p>
                  <p>
                    <font>关注</font>
                    <a class="fri-num" href="#">111</a>
                    <font>粉丝</font>
                    <a class="fri-num" href="#">222</a>
                    <font>人气</font>
                    <a class="fri-num" href="#">333</a>
                  </p>
                  <p>
                    <el-button type="danger" round>+ 关注</el-button>
                    <el-button type="danger" plain>私信</el-button>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="page">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="1" :page-size="5" layout="total, sizes, prev, pager, next, jumper"
              :total="10">
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="'粉丝'">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      currentPage4: 1
    };
  },
  components: {},
  methods: {
    handleCurrentChange() {
      console.log(this.currentPage4);
    },
    handleSizeChange() {
      console.log(this.currentPage4);
    }
  }
};
</script>

<style lang="less">
.friendFan-box {
  width: 1000px;
  .el-tabs__item {
    font-size: 16px;
  }
  .friend-box {
    font-size: 16px;
    .my-friend {
      padding-left: 20px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 400px;
          border: 1px solid #e4e8f1;
          background-color: #f8f8f8;
          margin: 20px 20px 0 0;
          padding: 10px;
          &:hover {
            background-color: #fff;
          }
          .sm-head-box {
            width: 64px;
            height: 64px;
            float: left;
            border: 1px #f8f8f8 solid;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .fofpop-box {
            padding: 10px 0 0 20px;
            float: left;
            p {
              padding-bottom: 15px;
              font {
                padding-right: 5px;
                font-size: 14px;
              }
              a {
                color: #39a6b1;
              }
              .fri-num {
                font-weight: bolder;
                font-size: 16px;
                padding-right: 25px;
              }
              .el-button {
                width: 100px;
                margin-top: 5px;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
    // 分页
    .page {
      text-align: right;
      padding-top: 20px;
    }
  }
}
</style>
