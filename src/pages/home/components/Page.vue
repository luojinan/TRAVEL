<template>
	<div >
		<div class="splitLine">热门推荐</div>
		<ul>
			<li class="li-item" v-for="item of list" :key="item.id">
				<div class="warpper">
					<img class="warpper-img" :src="item.imgSrc" />
				</div>
					<p class="warpper-title">{{item.title}}</p>
					<p class="warpper-desc">{{item.desc}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:'HomePage',
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
		height: .8rem;
		width: 100%;
		background-color: #eee;
		line-height: .8rem;
		margin-top: .1rem;
	}
	.li-itemm{
		width: 100%;
	}
	.warpper{
		overflow: hidden;
		height: 0;
		padding-bottom: 40%;
	}
	.warpper-img{
		width: 100%
	}

	.warpper-title{
		line-height: .54rem;
		font-size: .32rem;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-left: .2rem;
	}
	.warpper-desc{
		line-height: .4rem;
		padding-bottom: .2rem;
		padding-left: .2rem;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}


</style>