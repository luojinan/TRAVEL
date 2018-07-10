<template>
	<div class="city-header">
		<router-link to='/'>
			<div class="city-header__left">
				<div class="iconfont icon-back">&#xe624;</div>
			</div>
		</router-link>
		<div class="city-header__item">
			城市列表
		</div>	
	</div>
</template>

<script>
export default {
	name:'CityHeader',
}
</script>

<style>
	.city-header{
		display: flex;
		line-height:.86rem;
		color:#fff;
		background-color: #00bcd4;
	}
	.city-header__left{
		width:.64rem;
		float: left;
		text-align:center;
		color: #fff;
	}
	.city-header__item{
		margin-left: 2.9rem;
		font-size: .32rem;
	}
</style>