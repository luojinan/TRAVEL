<template>
	<div >
		<div class="splitLine">热门推荐</div>
		<ul>
			<router-link 
				tag="li"
				:to="'/detail/' + item.id"
				class="item" 
				v-for="item of list" 
				:key="item.id"
			>
				<img class="item-img" :src="item.imgSrc" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link >
		</ul>
	</div>
</template>

<script>
export default{
	name:'HomeRecommend',
	data:function(){
		return {
		}
	},
	props:{
		list:Array
	}
}
</script>

<style>
	.splitLine{
		height: .6rem;
		width: 100%;
		background-color: #eee;
		line-height: .6rem;
		margin-top: .1rem;
	}
	.item{
		height: 1.9rem;
		display: flex;
	}
	.item-img{
		width: 1.7rem;
		height: 1.7rem;
		padding:.1rem;
		border-radius: .2rem;
	}
	.item-info{
		padding:.1rem;
		flex:1;

		min-width: 0;
	}
	.item-title{
		line-height: .54rem;
		font-size: .32rem;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-desc{
		line-height: .4rem;
		color: #ccc;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-button{
		margin-top: .2rem;
		background-color: #ff9300;
		padding: 0 .2rem;
		border-radius: .1rem;
		color: #fff;
	}

</style>