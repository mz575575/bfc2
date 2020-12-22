<template>
  <div>
    <div @click="lc" class="bg_img">
      <!-- 
        <img  src="../pulic/2_01.jpg" alt="" style="width:80%;height: 80%;object-fit: cover; border-radius:2px">
        <img  src="../pulic/2_02.jpg" alt="" style="width:80%;height: 80%;object-fit: cover; border-radius:2px">
        <img  src="../pulic/2_03.jpg" alt="" style="width:80%;height: 80%;object-fit: cover; border-radius:2px">
        <img  src="../pulic/2_04.jpg" alt="" style="width:80%;height: 80%;object-fit: cover; border-radius:2px">  -->
      <div
        style="
          background-color: ##2c3e50;
          color: #3d405b;
          border-bottom: 1px solid #3d405b;
          padding: 10px;
        "
      >
        <span class="title">报废流程办理</span>

        <p style="margin: 0px">上门拖车服务/预约24小时服务</p>
      </div>
      <van-row type="flex" justify="space-between" class="row">
        <van-col span="11">
          <div class="bg">
            <span class="num">1.</span><span class="text">电话咨询</span>
          </div>
        </van-col>
        <van-col span="11">
          <div class="bg2">
            <span class="num">2.</span>
            <span class="text"
              >了解无锡市 <br />
              车辆报废政策</span
            >
          </div>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-around" class="row">
        <van-col span="10">
          <div class="bg2">
            <span class="num">3.</span
            ><span class="text">根据实际车型了解报废流程</span>
          </div>
        </van-col>
        <van-col span="10">
          <div class="bg">
            <span class="num">4.</span
            ><span class="text">根据车辆资料确定报废方案</span>
          </div>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center" class="row">
        <van-col span="10">
          <div class="bg">
            <span class="num">5.</span><span class="text">免费上门拖车</span>
          </div>
        </van-col>
        <van-col span="10" offset="1">
          <div class="bg2">
            <span class="num">6.</span>
            <span class="text">七个工作日出机动车注销证明</span>
          </div>
        </van-col>
      </van-row>

      <van-row type="flex" justify="end" class="row">
        <!-- <van-col span="7" class="title2 " offset="2">  上门拖车服务 预约24小时服务</van-col> -->
        <van-col span="18" offset="2">
          <div class="bg">
            <span class="num">7.</span
            ><span class="text" style="font-size: 1.2rem; line-height: 4.5rem"
              >报废证明完成</span
            >
          </div>
        </van-col>
      </van-row>

      <div>
        <van-row type="flex" justify="">
          <van-col span="6">
            <van-image
              :src="require('../pulic/huoche.jpg')"
              width="80"
              height="80"
              round
            ></van-image>
          </van-col>
          <van-col span="6">
            <van-image
              :src="require('../pulic/jiaoche.jpg')"
              width="80"
              height="80"
              round
            ></van-image>
          </van-col>

          <van-col span="6">
            <van-image
              :src="require('../pulic/面包.jpg')"
              width="80"
              height="80"
              round
            ></van-image>
          </van-col>
          <van-col span="6">
            <van-image
              :src="require('../pulic/shigu.jpg')"
              width="80"
              height="80"
              round
            ></van-image>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    lc() {
      this.$router.push("/btn_lc");
    },
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style scoped >
.num {
  font-size: 2.3rem;
}
.text {
  font-size: 0.91rem;
  /* text-align: center; */
  /* height: 0.8rem; */
}
.row {
  margin: 2rem 0px;
}
.bg_img {
  background-image: url("../pulic/bg1.png");
  /* background-repeat:repeat-x; */
  background-repeat: no-repeat;
  /* background-color: #5e6472; */
}
.title {
  font-size: 2rem;
  font-weight: bold;
}
.title2 {
  padding: 6px 2px;
  text-align: center;
  line-height: 2rem;
  margin: 0;
  font-size: 0.91rem;
  height: 5rem;
  font-weight: bold;
  color: #fff;
}
.bg {
  /* background-color:#4695ef; */
  background-color: #1778fd;
  height: 4.2rem;
  border-radius: 20px;
  text-align: center;
  /* line-height: 2.2rem; */
  color: #fff;
}
.bg2 {
  background-color: #fff;
  height: 4.2rem;
  border-radius: 20px;
  text-align: center;
  /* line-height: 5rem; */
  color: #3d405b;
}
</style>
