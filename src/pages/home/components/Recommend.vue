<template>
	<div >
		<div class="splitLine">热门推荐</div>
		<ul>
			<li class="item" v-for="item of list" :key="item.id">
				<img class="item-img" :src="item.imgSrc" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:'HomeRecommend',
	data:function(){
		return {
			list:[{
				id:'00001',
				title:'咬人猫',
				desc:'妖精的尾巴OP15❤MASAYUME CHASING o(*≧▽≦)ツ',
				imgSrc:'https://i0.hdslb.com/bfs/archive/6c70c817d7164387bf1422a20a86fe2b15ab850e.jpg@144w_90h.webp%22'
			},
			{
				id:'00002',
				title:'咬人猫',
				desc:'妖精的尾巴OP15❤MASAYUME CHASING o(*≧▽≦)ツ',
				imgSrc:'https://i0.hdslb.com/bfs/archive/6c70c817d7164387bf1422a20a86fe2b15ab850e.jpg@144w_90h.webp%22'
			},
			{
				id:'00003',
				title:'咬人猫',
				desc:'妖精的尾巴OP15❤MASAYUME CHASING o(*≧▽≦)ツ',
				imgSrc:'https://i0.hdslb.com/bfs/archive/6c70c817d7164387bf1422a20a86fe2b15ab850e.jpg@144w_90h.webp%22'
			}
			]
		}
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