<template>
  <div style="">
    <!-- 通知栏 -->
    <!-- btn -->
    <btn style="position:fixed;top:0.1rem;width:100%;z-index:999;"></btn>
    <!-- <notice style="margin-top:49px;"></notice> -->
    
    <div style="background-color: #1778fd;margin-top:3rem">
      <h2 class="title1">无锡车辆报废补贴中心</h2>
      <span class="title2">Wuxi vehicle scrapping subsidy Center</span>
      <div></div>
    </div>
    <!-- 轮播图 -->
    <swipe ></swipe>
    <!-- 广告语 -->
    <cell></cell>
    <!-- 四个宫格 -->

    <grid></grid>

    <!-- <van-cell icon="exchange" value="流程展示" is-link></van-cell> -->
    <!-- 流程图 -->
    <van-image :src="require('../pulic/banner1.jpg')"></van-image>
    <lc></lc>

    <!-- <van-cell icon="home-o" value="公司展示" is-link></van-cell> -->
    <!-- 公司图 -->
    <rowImg></rowImg>
    <!-- 新闻 -->
    <news></news>
    <!-- 底部图 -->
    <Footer></Footer>
    <!-- <van-button type="info" size="large" style="position:fixed;bottom:0;left:0"> <a style="color:#fff" href="tel=18360809011">立即拨打咨询</a></van-button> -->
  </div>
</template>



<script>
import swipe from "../components/Swipe";
import cell from "../components/Cell";
import grid from "../components/Grid";
import lc from "../components/Lc";
import rowImg from "../components/Row_img";
import news from "../components/News";
// import notice from "../components/Notice";
import btn from "../components/Btn"
import Footer from "../components/Footer.vue";


export default {
  props: {},
  components: {
    swipe,
    cell,
    grid,
    lc,
    rowImg,
    news,
    // notice,
    Footer,btn
    
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style scoped >
	.title1 {
  color: #fff;
  margin: 0px 0px 0px 0px;
}
.title2 {
  color: #fff;
  font-size: 13px;
  margin: 0px 0px 15px 0px;
  padding-bottom: 5px;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
