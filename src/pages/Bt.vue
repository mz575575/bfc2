<template>
    <div>
      <van-nav-bar
        title="补贴咨询"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"       
      />
      
     <bt></bt>
    </div>
</template>

<script>
import bt from "../components/Bt_text"
export default {
    props: {

    },
    components: {
      bt
        
    },
    data() {
        return {

        };
    },
    methods: {
      onClickLeft(){
        this.$router.push("/")
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

<style scoped >

</style>
