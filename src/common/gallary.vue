<template>
	<div class="common-gallary" @click="handelGallaryClick">
		<div class="common-gallary__swiper">
			<swiper :options="swiperOption" >
			    <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
			    	<img class="common-gallary__swiper--img" :src="item" />
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div> 
		  	</swiper>
		 </div>
	</div>
</template>

<script>

export default {
	name:'CommonGallary',
	components:{
		
	},	
	props:{
		gallaryImgs:Array
	},
	data:function(){
		return {
			swiperOption:{
					//在swiper官网查看api，改变下标样式
					pagination: '.swiper-pagination',
					paginationType:'fraction',
					observeParents:true,
					observer:true
			},
		}
	},
	methods:{
		handelGallaryClick(){
			this.$emit('close')
		}
	}
}
</script>
 
<style>
	/*为什么修改不了这个样式，HomeSwiper又可以修改*/
	.common-gallary >>> .swiper-container{
		overflow: inherit !important ;
		margin-left:.2rem !important;
	}
	.common-gallary{
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 99;
		position: fixed;
		top: 0;
		left: 0;
		right:0;
		bottom: 0;
		background-color: #000;
	}
	.common-gallary__swiper{
		height: 0;
		width: 100%;
		padding-bottom: 65%;
	}
	.common-gallary__swiper--img{
		width: 100%;
	}
	.swiper-pagination{
		color: #fff;
		/*bottom:-1rem;*/
	}

</style>