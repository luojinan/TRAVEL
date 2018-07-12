<template>
	<div class="header">
		<div class="left">
			<div class="iconfont icon-back">&#xe624;</div>
		</div>
		<div class="input">
			<span class="iconfont">&#xe632;</span> 输入搜索的内容
		</div>
		<router-link to="/city">
		<div class="right">
			{{this.city}}<span class="iconfont icon-arrow">&#xe6aa;</span>
		</div>
		</router-link>
	</div>
</template>

<script>
import{ mapState } from 'vuex'

export default {
	name:'Home',
	computed:{
		...mapState({city:'city'})
	},
	methods:{
		handleScroll(){
			console.log('scroll')
		}
	},
	//activated(){
	//	window.addEventListener('scroll',this.handleScroll)
	//},
	//deactivated(){
	//	window.removeEventListener('scroll',this.handleScroll)
	//}
}

	//这些组件的样式会被其他组件获取到？设置局部style
	//为什么stylus会突然有效又突然无效
</script>

<style >
	.header{
		display: flex;
		line-height:.86rem;
		color:#fff;
		background-color: #00bcd4;
	}
	.left{
		width:.64rem;
		float: left;
		text-align:center;
	}
	.icon-back{
		text-align:center;
		font-size:.4rem;
	}
	.right{
		min-width:1.04rem;
		padding-left: 0.1rem;
		float: right;
		text-align:center;
		color: #fff;
		
	}
	.icon-arrow{
		font-size:.24rem;
	}
	.input{
		flex:1;
		height:.64rem;
		line-height:.64rem;
		padding-left:.2rem;
		margin-top:.12rem;
		margin-left:.2rem;
		color:#ccc;
		background-color:#fff;
		border-radius:.1rem;
	}

</style>