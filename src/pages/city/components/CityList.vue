<template>
	<div class="city-list" ref="wrapper">
		<div>
			<div class="city-list__nowcity ">
				<div class="city-list__title">当前城市</div>
				<div class="city-list__button--list">
					<div class="city-list__button--wapper">
						<div class="city-list__button">广州</div>
					</div>
				</div>
			</div>
			<div class="city-list__hotcity">
				<div class="city-list__title">热门城市</div>
				<div class="city-list__button--list">
					<div class="city-list__button--wapper">
						<div class="city-list__button">广州</div>
					</div>
					<div class="city-list__button--wapper">
						<div class="city-list__button">广州</div>
					</div>
					<div class="city-list__button--wapper">
						<div class="city-list__button">广州</div>
					</div>
					<div class="city-list__button--wapper">
						<div class="city-list__button">广州</div>
					</div>
					<div class="city-list__button--wapper">
						<div class="city-list__button">广州</div>
					</div>
				</div>
			</div>
			<div class="city-list__abc">
				<div class="city-list__title">A</div>
				<div class="city-list__item--list">
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
				</div>
				<div class="city-list__title">A</div>
				<div class="city-list__item--list">
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
				</div>
				<div class="city-list__title">A</div>
				<div class="city-list__item--list">
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
				</div>
				<div class="city-list__title">A</div>
				<div class="city-list__item--list">
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
					<div class="city-list__item border-bottom">阿拉尔</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
	name:'CityList',
	//挂载实例类插件，写生命周期中
	mounted(){
		this.scroll = new BScroll(this.$refs.wrapper)
	}
}
</script>

<style>
	.city-list{
		/*固定页面 定义溢出隐藏，则页面无法滚动*/
		overflow: hidden;
		position: absolute;
		top:1.68rem;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.city-list__title{
		line-height: .54rem;
		padding-left: .2rem;
		font-size: .26rem;
		color: #666;
		background-color: #eee;
	}
	.city-list__button--list{
		padding:.1rem .6rem .1rem .1rem;
		overflow: hidden;
	}
	.city-list__button--wapper{
		float: left;
		width: 33.33%;
	}
	.city-list__button{
		margin: .1rem;
		padding: .1rem 0;
		text-align: center;
		border: .02rem solid #ccc;
		border-radius: .06rem;
	}
	.city-list__item--list{
		line-height: .76rem;
		padding-left: .2rem;
	}

</style>