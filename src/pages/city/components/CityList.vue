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
					<div class="city-list__button--wapper" v-for="item of hotCities" :key="item.id">
						<div class="city-list__button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div 
				class="city-list__abc" 
				v-for="(item,key) of list" 
				:key="key"
				:ref="key"
			>
				<div class="city-list__title">{{key}}</div>
				<div class="city-list__item--list">
					<div 
						class="city-list__item border-bottom" 
						v-for="innerItem of item"
						:key="innerItem.id"
					>
					{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
	name:'CityList',
	props:{
		hotCities:Array,
		list:Object,
		letter:String
	},

	//挂载实例类插件，写生命周期中
	mounted(){
		this.scroll = new BScroll(this.$refs.wrapper)
	},
	//显示区域不是靠触发，而是靠传递来的数据
	watch:{
		letter(){
			//console.log(this.letter)
			//better-scroll插件提供了 this.scroll.scrollToElement() 自动滚动到DOM区域
			if(this.letter){
				//获取对应letter字母的DOM区域(数组),因为key值是局部变量，用letter最好，有this所以用[this.letter]
				const element = this.$refs[this.letter][0]
				//console.log(element)
				this.scroll.scrollToElement(element);
			}
		}
	},
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