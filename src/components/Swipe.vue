<template>
  <div>
    <!-- 轮播图 -->

    <van-swipe :autoplay="3000" indicator-color="whire">
      <van-swipe-item>
        <van-image :src="require('../pulic/tc.png')" height="243" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image :src="require('../pulic/banner2.jpg')" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
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
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
