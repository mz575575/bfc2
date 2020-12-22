<template>
    <div>
      <van-nav-bar
        title="政策咨询"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"       
      />
      <zx></zx>
     
    </div>
</template>

<script>
import zx from "../components/Text"
export default {
    props: {

    },
    components: {
      zx
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
