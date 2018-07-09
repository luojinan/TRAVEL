<template>
	<div class="icons">
		<swiper :options="swiperOption" :not-next-tick="notNextTick" >
			<swiper-slide v-for="(swiper,index) of swipers" :key="index">
				<div class="icon" v-for="item of swiper" :key="item.id">
					<img class="imgstyle" :src="item.imgSrc" />
					<p class="titlestyle">{{item.title}}</p>
				</div>
			</swiper-slide>

			</swiper-slide>
		</swiper>
	</div>
</template>
	
<script>
	export default{
		name:'HomeIcons',
		data:function(){
			return {
				swiperOption:{
					pagination: '.swiper-pagination',
				},
				notNextTick: true,

				chooses:[
					{id:'00001',imgSrc:'http://i0.hdslb.com/bfs/archive/cee1d6f3b34e69e6084f67996b1ca1228a5218c5.jpg',
						title:'One Room 第二季'},
					{id:'00002',imgSrc:'http://i0.hdslb.com/bfs/archive/18f237427319864f1074b0fb48c31a7b47bafb35.jpg',title:'工作细胞"'},
					{id:'00003',imgSrc:'http://i0.hdslb.com/bfs/archive/6c9dfa490d35765a914a1594acf7176e72415348.jpg',title:'女神异闻录5'},
					{id:'00004',imgSrc:'http://i0.hdslb.com/bfs/archive/183a8a544154bdac36e9401cc589092bd45c784b.jpg',title:'Fate/EXTRA'},
					{id:'00005',imgSrc:'http://i0.hdslb.com/bfs/archive/02856e3259806aa6f5a690c86d04d927fe4c8af0.jpg',
						title:'后街女孩'},
					{id:'00006',imgSrc:'http://i0.hdslb.com/bfs/archive/d108d360396598785385a735b8941c5fae4ca262.jpg',title:'齐木楠雄的灾难 第二季"'},
					{id:'00007',imgSrc:'https://i0.hdslb.com/bfs/bangumi/0342f8915854f6ee18869137b0361d3b70d9f9da.png@240w_320h.png',title:'Free!'},
					{id:'00008',imgSrc:'http://i0.hdslb.com/bfs/bangumi/f63f4e80a01a9b51070658ada833b6cf3ce693e9.jpg',title:'赛马娘'},
					{id:'00009',imgSrc:'https://i0.hdslb.com/bfs/bangumi/b308ed7b60b8f7ff70f8a122adeb75914702611f.jpg@240w_320h.jpg',title:'OVERLORD Ⅲ'},
				],
			}
		},
		//把一维数组，变成二维数组
		//循环以二维数组1：组数为多少页 2、组内项循环
		computed:{
			swipers:function(){
				const swipers = []
				this.chooses.forEach((item,index) =>{
					const swiper = Math.floor(index/8);
					if(!swipers[swiper]){
						swipers[swiper] = []
					};
					swipers[swiper].push(item);
				})
				return swipers ;
			},
		},
	}
</script>

<style scoped>
	.icons{
		overflow: hidden;
		height: 0;
		padding-bottom: 50%;
	}
	.icon{
		float: left;
		overflow: hidden;
		height: 0;
		padding-bottom: 25%;
		width: 25%;
	}
	.imgstyle{
		display: block;
		width: 1.5rem;
		height: 1.5rem;
		text-align: center;
		margin:0 auto;
		margin-top:.1rem;
		border-radius: .2rem;

	}
	.icon .titlestyle{
		display: block;
		text-align: center;
		font-size: .1rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

</style>