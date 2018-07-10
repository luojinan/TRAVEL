<template>
		<ul class="city-alphabet">
			<li class="city-alphabet__item" v-for="(item,key) of list" :key="key">
			{{key}}
			</li>
		</ul>
</template>

<script>
export default {
	name:'CityAlphabet',
	props:{
		list:Object
	}
}
</script>

<style>
	.city-alphabet{
		width: .4rem;
		/*定位*/
		position: absolute;
		top:1.68rem;
		right: 0rem;
		bottom: 0rem;
		/*居中*/
		display: flex;
		flex-direction: column;/*垂直排列布局*/
		justify-content: center;/*垂直方向居中*/
	}
	.city-alphabet__item{
		line-height: .44rem;
		text-align: center;
		color: #00bcd4;
	}
</style>