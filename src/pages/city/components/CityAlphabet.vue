<template>
		<ul class="city-alphabet">
			<li class="city-alphabet__item" 
				v-for="(item,index) of letters" 
				:key="index"
				:ref="item"
				@click="handleLetterClick"
				@touchstart="handleTouchStart"
				@touchmove="handleTouchMove"
				@touchend="handleTouchEnd"
			>
			{{item}}
			</li>
		</ul>
</template>

<script>
export default {
	name:'CityAlphabet',
	props:{
		list:Object
	},
	data:function(){
		return {
			touchStatus:false,
			timer:null
		}
	},
	//props接收的父组件数据不能修改，在data中不好写计算逻辑
	computed:{
		letters(){
			const letters = [] ;
			for(let item in this.list){
				letters.push(item);
			};
			return letters
		},
	},
	methods:{
		handleLetterClick(e){
			//给父组件City.vue传递数据，文本内容
			this.$emit('change',e.target.innerText)
		},

		//滑动事件
		handleTouchStart(){
			this.touchStatus = true
		},
		handleTouchMove(e){
			if(this.touchStatus){
				if(this.timer){
					clearTimeout(this.timer)
				}
/***************设置定时器（touchmove触发频率高，则限制，限流）********************/
				this.timer = setTimeout(() => {
					//同样给父组件传递数据，但这个数据计算字母所在位置得出是什么字母的序列
					//获取DOM计算与顶部距离匹配 e.touches[0].clientY
					//const startY = this.$refs['A'][0].offsetTop
					//console.log(startY)
					const touchY = e.touches[0].clientY -84
					//console.log(touchY)
					//计算得整数的序列
					const index = Math.floor((touchY-this.startY)/22)
					//console.log(index)
					//A-Z外的区域也会算进去，筛选并传给父组件
					if(index>=0 && index<=this.letters.length){
						this.$emit('change',this.letters[index])
					}					
				},16)
			}
		},
		handleTouchEnd(){
			this.touchStatus = false
		},
	},
	/*生命周期— —性能优化— —某些固定的变量，依旧随着页面重新渲染而重新加载*/
	//让数据仅在数据更新的时候重新加载，与页面渲染无关
	updated(){
		this.startY = this.$refs['A'][0].offsetTop
	},
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