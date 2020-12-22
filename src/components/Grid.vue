<template>
    <div >

      <van-grid style="border:1px solid #888  ">
        <van-grid-item  text="补贴咨询" to="/bt"  style="border-right:1px solid #888 " >
          <van-image :src="require('../pulic/icon/2.png')" width="50" />
          <span style="font-weight:bold">补贴咨询</span>
          <p  style="margin:10px 0px 5px 0px ; text-align:top;font-size:12px; color:#333">无锡范围内 <br> 免费上门拖车 </p>
        </van-grid-item>

        <van-grid-item text="补贴政策" to="/zx" style="border-right:1px solid #888 ">
        <van-image :src="require('../pulic/icon/3.png')" width="50" />
        <span style="font-weight:bold;margin-top:0px;">补贴政策</span>
          <p  style="margin:10px 0px 5px 0px ; text-align:top;font-size:12px; color:#333">无锡报废政策 <br> 了解详情 </p>

        </van-grid-item>

        <van-grid-item  text="报废流程" to="/btn_lc" style="border-right:1px solid #888 ">
        <van-image :src="require('../pulic/icon/4.png')" width="50" />
        <span style="font-weight:bold">报废流程</span>
          <p  style="margin:10px 0px 5px 0px ; text-align:top;font-size:12px; color:#333">各类车型 <br> 报废了解流程 </p>

        </van-grid-item>

        <van-grid-item  text="报废咨询" to="btn_lc" style="">
        <van-image :src="require('../pulic/icon/5.png')" width="50" />
        <span style="font-weight:bold">报废咨询</span>
          <p  style="margin:10px 0px 5px 0px ; text-align:top;font-size:12px; color:#333">各类报废 <br> 业务咨询 </p>


        </van-grid-item>
      </van-grid>

    </div>
</template>

<script>
export default {
    props: {

    },
    components: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
};
</script>

<style scoped >

</style>
