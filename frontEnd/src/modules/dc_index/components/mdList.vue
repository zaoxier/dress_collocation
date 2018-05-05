<template>
  <div class="md-fashionShow">
    <div class="title">
      <span class="chinese-title">{{item.title}}</span>
      <span class="english-title">{{item.englishTitle}}</span>
    </div>
    <div class="list-fs">
      <div class="list-fs-lf">
        <dl>
          <dt>
            <a href=""><img :src="rootPath+item.article[0].picPath"></a>
          </dt>
          <dd>
            <a>{{item.article[0].picTitle}}</a>
          </dd>
        </dl>
      </div>
      <div class="list-fs-rt">
        <div class="md_01">
          <h3>
            <a href="">{{item.article[0].picTitle}}</a>
          </h3>
          <p>
            <a href="">{{item.article[0].picDescrip}}</a>
          </p>
          <span>
            <a href="">{{item.article[0].author}}</a>
          </span>
        </div>
        <div class="md_02">
          <ul>
            <li v-for="(childItem,index) in item.article" :key="index" :childItem="childItem"
              v-if="index >= 1">
              <p class="fslt_lf">
                <a href="#">{{childItem.picTitle}}</a>
              </p>
              <p class="fslt_rt">
                <a href="#">{{childItem.author}}</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test_index",
  props: ["item"],
  data() {
    return {
      fsImg: "dress1.jpg",
      rootPath,
      list: []
    };
  },
  created() {
    // this.list = item;
  },
  methods: {
    loadImg(imgName) {
      return require("../../../../mock/public/index/" + imgName);
    }
  }
};
</script>

<style lang="less">
.md-fashionShow {
  width: 800px;
  height: 400px;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 12px;
  .title {
    border-bottom: 1px solid black;
    text-align: left;
    .chinese-title {
      font-family: "雅黑";
      font-size: 32px;
      font-weight: bold;
      margin-right: 20px;
    }
    .english-title {
      font-size: 32px;
      font-style: oblique;
      color: rgb(180, 72, 72);
    }
  }
  // 时装秀内容
  .list-fs {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    .list-fs-lf {
      flex: 1;
      margin-right: 20px;
      dt {
        height: 300px;
        border: 1px solid rgba(255, 255, 255, 0);
        padding: 1px;
        &:hover {
          border: 1px solid #d33b30;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        margin-top: 10px;
      }
    }
    .list-fs-rt {
      flex: 1;
      .md_01 {
        padding-bottom: 25px;
        border-bottom: 1px dotted #a3a3a3;
        position: relative;
        height: 100px;
        h3 {
          font-size: 16px;
        }
        p {
          text-align: left;
          font-size: 14px;
        }
        span {
          position: absolute;
          right: 0;
          bottom: 0;
          margin-bottom: 5px;
        }
      }
      .md_02 {
        padding: 10px 0 0 0;
        ul {
          list-style: none;
          li {
            line-height: 25px;
            display: flex;
            justify-content: space-around;
            .fslt_lf {
              flex: 9;
              text-align: left;
            }
            .fslt_rt {
              color: #b3b3b3;
              flex: 1;
            }
          }
        }
      }
    }
  }
  a:link {
    text-decoration: none;
  }
  a:hover {
    color: rgb(180, 72, 72);
    text-decoration: underline;
  }
}
</style>


