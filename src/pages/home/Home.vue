<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-page></home-page>
	</div>
</template>

<script>
	//总页面：拆分为小组件1、header 
	//引入header组件
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/HomeSwiper'
	import HomeIcons from './components/Icons'
	import HomeRecommend from './components/Recommend'
	import HomePage from './components/Page'
	export default {
		name:'Home',
		//注册组件
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomePage
		}
	}
</script>

<style></style>