<template>
	<div class="common-gallary" @click="handelGallaryClick">
		<div class="common-gallary__swiper">
			<swiper :options="swiperOption" >
			    <swiper-slide v-for="item of list" :key="item.id">
			    	<img class="common-gallary__swiper--img" :src="item.imgUrl" />
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
	data:function(){
		return {
			swiperOption:{
					pagination: '.swiper-pagination',
					observeParents:true,
					observer:true
			},
			list:[{
				id:'00001',imgUrl:'http://i0.hdslb.com/bfs/archive/231eeec338447f0c2cf65a95a782dd55e2e32eb9.jpg'
			},{
				id:'00002',imgUrl:'http://i0.hdslb.com/bfs/archive/231eeec338447f0c2cf65a95a782dd55e2e32eb9.jpg'
			}]
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