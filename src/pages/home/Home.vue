<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		test
	</div>
</template>

<script>
	//总页面：拆分为小组件1、header 
	//引入header组件
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/HomeSwiper'
	export default {
		name:'Home',
		//注册组件
		components:{
			HomeHeader,
			HomeSwiper
		}
	}
</script>

<style></style>