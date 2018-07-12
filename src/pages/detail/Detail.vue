<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<detail-list :list="categoryList"></detail-list>
		<div class="test"></div>
	</div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
import axios from 'axios'

export default {
	name:'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},	
	data:function(){
		return {
			sightName:'',
			bannerImg:'',
			gallaryImgs:[],
			categoryList:[]
		}
	},
	methods:{
		getDatailInfo(){
			//页面获取到路由传向后台
			axios.get('static/mock/detail.json',{
				params:{
					id:this.$route.params.id
				}
			}).then(this.getDetailInfoSucc)
		},
		getDetailInfoSucc(res){
			console.log(res)
			const data = res.data.data
			this.sightName=data.sightName
			this.bannerImg = data.bannerImg
			this.gallaryImgs = data.gallaryImgs
			this.categoryList = data.categoryList
		}
	},
	mounted(){
		this.getDatailInfo()
	}
}
</script>

<style>
	.test{
		height: 20rem;
	
	}
</style>