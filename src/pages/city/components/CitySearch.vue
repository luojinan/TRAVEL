<template>
	<div class="city-search">
		<input class="city-search_search" type="text" placeholder="输入城市名或拼音" />
	</div>
</template>

<script>
export default {
	name:'CitySearch',
}
</script>

<style>
	.city-search{
		line-height:.72rem;
		background-color: #00bcd4;
		padding: 0 .2rem .1rem .2rem;
	}
	.city-search_search{
		/*使区域不溢出*/
		box-sizing: border-box;
		width: 100%;
		height: .62rem;
		line-height: .62rem;
		text-align: center;
		padding: 0 .1rem;
		border-radius: .06rem;
	}

</style>