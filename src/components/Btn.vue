<template>
<div style="background-color:#FFF">
		<!-- <notice></notice> -->

		<!-- <div class="btn-box">
			
		<van-button color="#1778fd" square  size="normal" to="/zx" style="font-size:0.8rem;border:0px;font-weight:bold">政策咨询</van-button>
		<van-button color="#1778fd"  square size="normal" to="/btn_lc" style="font-size:0.8rem;border:0px;font-weight:bold">办理流程</van-button>
		<van-button color="#1778fd"  square size="normal" to="/btn_lc" style="font-size:0.8rem;border:0px;font-weight:bold">申请指南</van-button>
		<van-button color="#1778fd" square  size="normal" to="/bt" style="font-size:0.8rem;border:0px;font-weight:bold">补贴咨询</van-button>
	</div> -->

	
	<van-row type="flex" justify="space-between" style="height:2.8rem">
		<van-col span="5" style=" "  >
			<router-link to="/zx">
				<button class="btn-box" style="font-size:0.85rem;border:0px;font-weight:bold:padding:0px; background-color:#1778fd;color:#fff;">政策咨询</button>	
			</router-link>
		</van-col>
		<van-col span="5" style="">
			<router-link to="/btn_lc">
			<button class="btn-box" style="font-size:0.85rem;border:0px;font-weight:bold:padding:0px;background-color:#1778fd;color:#fff;">办理流程</button>		 
			</router-link>
		</van-col>
		<van-col span="5" style="">
			<router-link to="/btn_lc" style="margin:0px;">
			<button class="btn-box" style="font-size:0.85rem;border:0px;font-weight:bold:padding:0px;background-color:#1778fd;color:#fff;">申请指南</button>
			</router-link>		 
		</van-col>
		<van-col span="5" style="" >
			<router-link to="/bt">
			<button class="btn-box" style="font-size:0.85rem;border:0px;font-weight:bold:padding:0px;background-color:#1778fd;color:#fff;margin:0px;">补贴咨询</button>	
			</router-link>	 
		</van-col>
		
	</van-row>
	
</div>

</template>

<script>

// import notice from "./Notice"
export default {
  
  components: {
    // notice
    
  }
}
</script>

<style scoped>
	.btn-box{
    /* margin:1px 3px; */
		height:2.6rem;
		/* display: flex; */
		justify-content: space-between;
		align-items: center;
		
		
		
	}
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
</style>