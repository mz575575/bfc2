<template>
  <div id="app">
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div style="height:65px"></div>
    <div class="btn" > <van-icon name="phone-o" color="#fff" size="2.5rem" style="position:fixed;bottom:0.8rem;left:18%" /> <a style="color:#fff" href="tel:18360809011">立即拨打咨询</a> </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue '

export default {
   name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.btn{
     width:100%;
     height:65px;
     background-color:#1778fd; 
     border-radius: 10px;
     text-align: center;
     line-height: 65px;
     font-size:21px;
     position:fixed;
     bottom:0;
     z-index:9999;
     
}
</style>
