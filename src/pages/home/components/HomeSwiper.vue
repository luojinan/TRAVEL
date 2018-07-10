<template>
	<div class="wrapper">
		<swiper :options="swiperOption" :not-next-tick="notNextTick" >
		    <swiper-slide v-for="item of list" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
		    <div calss="swiper-pagination"  slot="pagination"></div>

	  	</swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeSwiper',
		data:function(){
			return {
				swiperOption:{
					pagination: '.swiper-pagination',
				},
				notNextTick: true,
				//用本地图片不行？？？
			}
		},
		props:{
			list:Array
		}
	}
</script>

<style  scoped>
	/*修改轮播图组件的点css，不是局部css，所以要穿透>>>*/
	/*在wrapper下的所有这个class通过控制台找到*/
	.wrapper >>> .swiper-pagination-bullet-active{
		background-color: red !important ;
	}
	.wrapper{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 61%;
		background-color: #ccc;
	}
	.swiper-img{
		width: 100%;
	}
</style>