<template>
	<div >
		<div class="splitLine">热门推荐</div>
		<ul>
			<li class="li-item" v-for="item of PageList" :key="item.id">
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
			PageList:[{
				id:'00001',
				title:'方舟指令',
				desc:'介系一款你从未玩过的全新游戏，系兄弟就来砍我',
				imgSrc:'http://i0.hdslb.com/bfs/game/0787ceeea262b371ad5c1f1e95f32c7a5c8d49f4.jpg'
			},
			{
				id:'00002',
				title:'崩坏3rd',
				desc:'介系一款你从未玩过的全新游戏，系兄弟就来砍我',
				imgSrc:'http://i0.hdslb.com/bfs/game/674a9c8c03c776350659e997064de44060824b4b.jpg'
			},
			{
				id:'00003',
				title:'零境交错',
				desc:'介系一款你从未玩过的全新游戏，系兄弟就来砍我',
				imgSrc:'http://i0.hdslb.com/bfs/game/73984050e3133ad615a6f72ab9b327dc077f2d7d.jpg'
			}
			]
		}
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