<template>
	<div>
		<div class="detail-banner" @click="handelBannerClick">
			<img 
			class="detail-banner__img" 
			:src="bannerImg" />
			<div class="detail-banner__info">
				<div class="detail-banner__info--title">
					{{sightName}}
				</div>
				<div class="detail-banner__info--number">
					<span class="iconfont">&#xe632;</span>
					{{gallaryImgs.length}}
				</div>
			</div>
		</div>
		<!--画廊展示页面，做成公用组件形式-->
		<common-gallary :gallaryImgs="gallaryImgs" v-show="isShow" @close="handelGallaryClose"></common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary'

export default {
	name:'DetailBanner',
	components:{
		CommonGallary,
	},
	props:{
		sightName:String,
		bannerImg:String,
		gallaryImgs:Array
	},
	data:function(){
		return {
			isShow:false
		}
	},
	methods:{
		handelBannerClick(){
			this.isShow=true;
		},
		handelGallaryClose(){
			this.isShow=false
		}
	}
}
</script>

<style>
	.detail-banner{
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 61%;
	}
	.detail-banner__img{
		width: 100%;
	}
	.detail-banner__info{
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		line-height: .6rem;
		display: flex;	/*横向排列*/
		color: #fff;
		background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8)) ;
	}
	.detail-banner__info--title{
		flex:1;	/*不知道？*/
		font-size: .32rem;
		padding: 0 .2rem;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.detail-banner__info--number{
		padding: 0 .2rem;
		margin-top: .14rem;
		height: .32rem;
		line-height: .32rem;
		font-size: .24rem;
		background-color: rgba(0,0,0,0.8);
		border-radius: .2rem;
	}
</style>