<template>
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-page :list="pageList"></home-page>
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
	import axios from 'axios'
	import { mapState } from 'vuex'

	export default {
		name:'Home',
		//注册组件
		components:{
			HomeHeader,	
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomePage
		},
		data:function(){
			return {
				swiperList:[],
				iconList:[],
				recommendList:[],
				pageList:[],

				lastCity:''
			}
		},
		computed:{
			...mapState({city:'city'})
		},
		methods:{
			//axios获取数据方法
			getHomeInfo(){
				//get  then回调
				axios.get('static/mock/index.json?city=' + this.city)
					.then(this.getHomeInfoSucc)
			},
			//成功过去数据的回调函数
			getHomeInfoSucc(res){
				//console.log(res)
				const data = res.data.data

				this.headerList = data.city
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.pageList = data.pageList
			}
		},

		//生命周期，一加载就执行方法
		mounted(){
			this.lastCity = this.city
			this.getHomeInfo()
		},
		/*先直接<keep-alive>断了页面切换重新获取数据*/
		/*判断是否切换了城市来判断是否重新获取ajax数据*/
		//这个生命周期在页面切换的时候就会执行，而mounted会存入内存中不执行
		activated(){
			if(this.lastCity !== this.city){
				this.getHomeInfo()
			}
		}
	}
</script>

<style></style>