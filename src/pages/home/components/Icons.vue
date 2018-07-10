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
			}
		},
		props:{
			list:Array
		},
		//把一维数组，变成二维数组
		//循环以二维数组1：组数为多少页 2、组内项循环
		computed:{
			swipers:function(){
				const swipers = []
				this.list.forEach((item,index) =>{
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