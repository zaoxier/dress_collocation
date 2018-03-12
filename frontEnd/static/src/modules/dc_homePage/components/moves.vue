<template>
 <div class="moves">
   <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i>回复我的</span>
        <div class="moves-box">
          <dl>
            <dt>
              <span class=""></span>
            </dt>
          </dl>
        </div>
      </el-tab-pane>
  <el-tab-pane :label="'我的发帖'">我的发帖</el-tab-pane>
  <el-tab-pane :label="'我的回帖'">我的回帖</el-tab-pane>
  <el-tab-pane :label="'我收藏的帖子'+'(12)'">我收藏的帖子</el-tab-pane>
</el-tabs>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tableData: [
        {
          theme: '2018年春季来了应该穿些什么呢？',
          plate: '季节',
          resCheNum: '32/83',
          lastRes: '昵称+时间'
        },
        {
          theme: '2018年春季来了应该穿些什么呢？',
          plate: '季节',
          resCheNum: '32/83',
          lastRes: '昵称+时间'
        },
        {
          theme: '2018年春季来了应该穿些什么呢？',
          plate: '季节',
          resCheNum: '32/83',
          lastRes: '昵称+时间'
        },
        {
          theme: '2018年春季来了应该穿些什么呢？',
          plate: '季节',
          resCheNum: '32/83',
          lastRes: '昵称+时间'
        }
      ]
    }
  },
  components: {},
  methods: {
    // this.axios.getApi(res).then(res => {})
  }
}
</script>

<style lang="less">
  .moves{
    padding-left: 10px;
    width: 940px;
    .el-tabs__item{
      &:hover{
        color: #20a0ff;
      }
    }
  }
</style>
