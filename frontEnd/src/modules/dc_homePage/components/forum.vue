<template>
  <div class="forum">
    <el-tabs type="border-card">
      <el-tab-pane v-for="(item, index) in tabTitle" :key="index" :tableData = "tableData">
        <span slot="label">{{tabTitle[index]}}</span>
        <div class="smlMenu" v-if="index == 1">
          <a href="#">最新发布</a>
                              <a href="#">精华</a>
          <a href="#">查看更多</a>
          <a href="#">最多回复</a>
        </div>
        <div class="forum-box">
          <dl>
            <dt>
              <span class="theme">主题</span>
              <span class="plate">板块</span>
              <span class="resCheNum">回复/查看</span>
              <span class="lastRes" v-if="index == 1 || index == 2">最后回复</span>
              <span v-else class="lastRes">回复时间</span>
            </dt>
            <dd v-for="(item, indexOfChild) in tableData[index]" :key="indexOfChild"
             :class="(index === 1 || index === 3)? 'dd-noReply': 'dd-replay'">
              <div  class="dd-list" v-if="(index === 1 || index === 3)">
                <span class="theme txt"><a  href="#">{{item.theme}}</a>
              <i class="essence iconPic" v-if="item.essence"></i>
              <i class="isPic iconPic" v-if="item.isPic"></i></span>
              <span class="plate txt">{{item.plate}}</span>
              <span class="resCheNum txt">{{item.resCheNum}}</span>
              <span class="lastRes txt"><a href="#">{{item.lastMan}}</a><p>{{item.lastRes}}</p></span>
              </div>
              <div class="dd-list" v-else>
                <span class="theme txt"><a  href="#">{{item.theme}}</a>
              <p>回复：<a href="#">是哒是哒ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</a></p></span>
              <span class="plate txt">{{item.plate}}</span>
              <span class="resCheNum txt">{{item.resCheNum}}</span>
              <span class="lastRes txt" v-if="index === 2"><p>{{item.lastRes}}</p></span>
              <span class="lastRes txt replyMe" v-else><a href="#">{{item.lastMan}}</a><p>{{item.lastRes}}</p></span>
              </div>
            </dd>
          </dl>
          <div class="page">
            <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="1" :page-size="5" layout="total, sizes, prev, pager, next, jumper"
              :total="10">
            </el-pagination> -->
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tabTitle: ["回复我的", "我的发帖", "我的回帖", "我收藏的帖子"],
      test: [[], []],
      tableData: [
        [
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            // 是否评为精华，是否发表了图片
            essence: false,
            isPic: true
          },
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: false,
            isPic: false
          },
          {
            theme: "2018年春季来了应该穿些什么呢？kkkkkkkkkkkk",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: true,
            isPic: true
          },
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: false,
            isPic: true
          }
        ],
        [
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            // 是否评为精华，是否发表了图片
            essence: false,
            isPic: true
          },
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: false,
            isPic: false
          },
          {
            theme: "2018年春季来了应该穿些什么呢？kkkkkkkkkkkk",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: true,
            isPic: true
          },
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: false,
            isPic: true
          }
        ],
        [
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            // 是否评为精华，是否发表了图片
            essence: false,
            isPic: true
          },
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: false,
            isPic: false
          },
          {
            theme: "2018年春季来了应该穿些什么呢？kkkkkkkkkkkk",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: true,
            isPic: true
          },
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: false,
            isPic: true
          }
        ],
        [
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            // 是否评为精华，是否发表了图片
            essence: false,
            isPic: true
          },
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: false,
            isPic: false
          },
          {
            theme: "2018年春季来了应该穿些什么呢？kkkkkkkkkkkk",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: true,
            isPic: true
          },
          {
            theme: "2018年春季来了应该穿些什么呢？",
            plate: "季节",
            resCheNum: "32/83",
            lastMan: "时光静好",
            lastRes: "2018-1-3 21:10",
            essence: false,
            isPic: true
          }
        ]
      ]
    };
  },
  components: {},
  methods: {
    // this.axios.getApi(res).then(res => {})
  }
};
</script>

<style lang="less">
.forum {
  padding-left: 10px;
  width: 940px;
  // 分页
  .page {
    text-align: right;
    padding-top: 20px;
  }
  .smlMenu {
    line-height: 14px;
    margin: 20px 0 0 10px;
    a {
      padding: 0 20px;
      font-size: 12px;
      line-height: 14px;
      border-right: 1px solid #ececec;
      color: #666;
      &:last-child {
        border-right: 0;
      }
      &:hover {
        color: #ff0000;
      }
      &:active {
        color: #ff0000;
      }
    }
  }
  // tab标签hover颜色
  .el-tabs__item {
    &:hover {
      color: #20a0ff;
    }
  }
  // 去除tab内容padding
  .el-tabs--border-card > .el-tabs__content {
    padding: 0;
  }

  // 论坛评论内容
  .forum-box {
    margin-top: 20px;
    dl {
      color: #666;
      dt {
        background: #fafafa;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #e9e9e9;
        display: flex;
        .theme {
          flex: 4;
          margin: 0 10px 0 20px;
        }
        .plate,
        .resCheNum,
        .lastRes {
          flex: 1;
          margin-right: 50px;
        }
      }
      .dd-noReply {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #e9e9e9;
        .dd-list {
          width: 100%;
          display: flex;
          .plate,
          .resCheNum {
            flex: 1;
          }
          span {
            margin-right: 50px;
            height: 100%;
          }
          .theme {
            flex: 4;
            margin: 0 10px 0 20px;
            a {
              max-width: 300px;
              display: inline-block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #333;
              &:hover {
                color: red;
              }
            }
            .iconPic {
              font-size: 0;
              display: inline-block;
              margin-bottom: 14px;
              line-height: 100%;
              margin-left: 10px;
              overflow: hidden;
            }
            .essence {
              width: 32px;
              height: 32px;
              background: url("../../../assets/images/essence_32.png") no-repeat;
            }
            .isPic {
              width: 32px;
              height: 32px;
              background: url("../../../assets/images/picture_32.png") no-repeat;
            }
          }
          .lastRes {
            flex: 1;
            a {
              display: block;
              color: #75a2a6;
              line-height: 35px;
              color: #333;
            }
            p {
              font-size: 12px;
              line-height: 25px;
              color: #999;
            }
          }
        }
      }
      .dd-replay {
        height: 82px;
        line-height: 82px;
        border-bottom: 1px solid #e9e9e9;
        .dd-list {
          width: 100%;
          display: flex;
          .theme {
            flex: 4;
          }
          .plate,
          .resCheNum,
          .lastRes {
            flex: 1;
          }
        }
        span {
          margin-right: 50px;
          height: 100%;
        }
        .theme {
          margin: 0 10px 0 20px;
          a {
            max-width: 300px;
            display: block;
            margin: 20px 0 10px;
            line-height: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #333;
          }
          p {
            max-width: 400px;
            height: 16px;
            line-height: 16px;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #999;
            a {
              display: inline;
              line-height: 16px;
              color: #333;
            }
          }
        }
        .lastRes {
          p {
            font-size: 12px;
            color: #999;
            line-height: inherit;
          }
        }
        .replyMe {
          a {
            display: block;
            color: #75a2a6;
            line-height: 35px;
            margin-top: 10px;
            color: #333;
          }
          p {
            font-size: 12px;
            line-height: 25px;
            color: #999;
          }
        }
      }
      .dd-noReplay .txt {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
