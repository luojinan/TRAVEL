<template>
	<div class="common-gallary" @click="handelGallaryClick">
		<div class="common-gallary__swiper">
			<swiper :options="swiperOption" >
			    <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
			    	<img class="common-gallary__swiper--img" :src="item" />
			    </swiper-slide>
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
					pagination: '.swiper-pagination',
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
		overflow: hidden;
		height: 0;
		width: 100%;
		padding-bottom: 65%;
	}
	.common-gallary__swiper--img{
		width: 100%;
	}

</style>