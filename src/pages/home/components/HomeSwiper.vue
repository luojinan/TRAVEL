<template>
	<div class="wrapper">
		<swiper :options="swiperOption" :not-next-tick="notNextTick" >
		    <swiper-slide v-for="item of srcs" :key="item.id">
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
				srcs:[
					{id:'00001',imgUrl:'http://i0.hdslb.com/bfs/archive/3a318d271175b4a8c80ed6c9e19801339be6c59b.jpg'},
					{id:'00002',imgUrl:'http://i0.hdslb.com/bfs/archive/231eeec338447f0c2cf65a95a782dd55e2e32eb9.jpg'},
					{id:'00003',imgUrl:'http://i0.hdslb.com/bfs/archive/2193572fb145db4bb638c7f7fb1ac42ba36465aa.jpg'}
				],
			}
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