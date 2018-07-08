<template>
	<home-header></home-header>
</template>

<script>
	//总页面：拆分为小组件1、header 
	//引入header组件
	import HomeHeader from './components/Header'
	export default {
		name:'Home',
		//注册组件
		components:{
			HomeHeader
		}
	}
</script>

<style></style>