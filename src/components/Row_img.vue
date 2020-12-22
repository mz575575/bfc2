<template>
    <div>
    <van-row gutter="8">
      <van-col span="12">
        <van-image  :src="require('../pulic/bf1.jpg')"
      /> 
      <!-- <span>报废车停放一角</span> -->
      </van-col>
      <van-col span="12">
        <van-image  :src="require('../pulic/bf2.jpg')"
      />
      <!-- <span>待拆解的报废车</span> -->
      </van-col>
    </van-row>
    <van-row gutter="8">
      <van-col span="12">
        <van-image  :src="require('../pulic/bf3.jpg')"
      />
      <!-- <span>拆解厂一角</span> -->
      </van-col>
      <van-col span="12">
        <van-image  :src="require('../pulic/bf4.jpg')"
      />
      <!-- <span>报废场待拆解的货车</span> -->
      </van-col>
    </van-row>
    <van-row gutter="8">
      <van-col span="12">
        <van-image  :src="require('../pulic/bf5.jpg')"
      />
      <!-- <span>摩托车报废</span> -->
      </van-col>
      <van-col span="12">
        <van-image  :src="require('../pulic/bf6.jpg')"
      />
      <!-- <span>拖车拉拖头进拆车厂报废</span> -->
      </van-col>
    </van-row>
    <van-row gutter="8">
      <van-col span="12">
        <van-image  :src="require('../pulic/bf8.jpg')"
      />
      <!-- <span>报废车装车拖入拆车厂</span> -->
      </van-col>
      <van-col span="12">
        <van-image  :src="require('../pulic/bf8.jpg')"
      />
      <!-- <span>客车拆解</span> -->
      </van-col>
    </van-row>
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
  div{
    padding: 2px 3px;
  }
  span{
    font-size:14px;
    color:#555;
    
  }
</style>
