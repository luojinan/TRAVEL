<template>
	<div>
		<div class="city-search">
			<input v-model="keyword" class="city-search__search" type="text" placeholder="输入城市名或拼音" />
		</div>
		<div 
			class="city-search__list" 
			v-show="keyword"
			ref="wrapper"
		>
			<ul>
				<li 
					class="city-search__list--item border-bottom"
					v-for="item of showCities"
					:key="item.id"
					@click="handleCitySearch(item.name)"
				>
				{{item.name}}
				</li>
				<li 
					class="city-search__list--item border-bottom"
					v-show="hasNoData"
				>
				没有找到匹配城市
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
import BScroll from 'better-scroll'

export default {
	name:'CitySearch',
	props:{
		list:Object
	},
	data:function(){
		return {
			keyword:'',
			showCities:[],
			timer:null
		}
	},
	methods:{
		handleCitySearch(city){
			this.$store.dispatch('changeCity',city)
			//返回首页，路由，可不在html中操作（循环多个的跳转）
			this.$router.push('/')
		}
	},
	computed:{
		hasNoData(){
			return !this.showCities.length
		}
	},
	
	//滑动插件实例
	mounted(){
		this.scroll = new BScroll(this.$refs.wrapper)
	},

	//监听输入
	watch:{
		keyword(){
			if(this.timer){
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(()=>{
				//判断输入的字母和文字与json中的数据匹配则push进数组
				const result =[];
				//父组件传递过来的数据是对象，因此需要2次遍历循环
				for(let item in this.list){
					this.list[item].forEach((innerItem)=>{
						//循环得的数据与输入数据匹配，判断(字母、文字)
						if(innerItem.spell.indexOf(this.keyword) > -1 || innerItem.name.indexOf(this.keyword) > -1){
								result.push(innerItem)
						}
					})
				}
				this.showCities = result
			},100)
		}
	}

}
</script>

<style>
	.city-search{
		line-height:.72rem;
		background-color: #00bcd4;
		padding: 0 .2rem .1rem .2rem;
	}
	.city-search__search{
		/*使区域不溢出*/
		box-sizing: border-box;
		width: 100%;
		height: .62rem;
		line-height: .62rem;
		text-align: center;
		padding: 0 .1rem;
		border-radius: .06rem;
	}
	.city-search__list{
		z-index: 1;	/*占满全页？*/
		position: absolute;
		top:1.58rem;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		background-color: #eee;
	}
	.city-search__list--item{
		line-height: .62rem;
		padding-left: .2rem;
		background-color: #fff;
	}

</style>