<template>
  <div class="carousel">
      <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in arrCarousel" :key="item">
      <div class="img-box"><a href="#"><img :src="rootPath + item"></a></div>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>

export default {
  name: "carousel",
  data() {
    return {
      rootPath,
      arrCarousel: ['/index/carousel/liuwen1.jpg', '/index/carousel/liuwen2.jpg',
        '/index/carousel/liuwen3.jpg', '/index/carousel/liuwen4.jpg']
    }
  }
};
</script>

<style lang="less">
.carousel {
  padding: 20px 0;
  background-color: #f5f5f5;
  .el-carousel__item .img-box {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>

