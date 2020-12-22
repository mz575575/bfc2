<template>
    <div>
      <van-nav-bar
        title="办理流程/申请指南"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"       
      />
      
     <LcText></LcText>
    </div>
</template>

<script>
import LcText from '@/components/LcText'
export default {
    props: {

    },
    components: {
      LcText
        
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
