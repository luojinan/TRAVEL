<template>
	<div class="wrapper">
		<swiper :options="swiperOption" :not-next-tick="notNextTick" >
		    <swiper-slide v-for="item of list" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
			
	  	</swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeSwiper',
		data:function(){
			return {
				swiperOption:{
					autoplay: 3000,
			        pagination: '.swiper-pagination',
			        observeParents:true,	//解决页面首次加载，滑动错误的问题
					observer:true			//原因：首次加载的区域计算，使显示错误
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
		background-color: #fff !important ;
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