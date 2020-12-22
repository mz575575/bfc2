<template>
    <div  @click="news" >
      <hr>
      <van-cell value="行业新闻" is-link icon="new-o"/>
    <!-- <van-cell icon="new-o" value="" is-link style="background-color:#4895ef;color:#fff"><span style="color:#fff">行业新闻</span></van-cell> -->
      
      
    <img  src="../pulic/new2.png" alt="" style="width:100%;
    height: 150px;
    object-fit: cover; border-radius:2px">
    
<van-cell  title="报废汽车回收详细法规)"  label=""> <van-badge  style="margin-right:13px" content="Hot">
  <div class="child" />
</van-badge></van-cell>

<hr>






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
      news(){
        this.$router.push("/new")
      }
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

<style scoped lang="less">

</style>
