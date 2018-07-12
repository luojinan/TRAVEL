<template>
	<div class="detail-header" @click="handleClick">
		<router-link 
			tag="div" 
			to="/"
			class="detail-header__abs"
			v-if="showAbs"
		>
			<div class="iconfont detail-header__abs-back">&#xe624;</div>
		</router-link>
		<div class="detail-header__fixed" v-if="!showAbs" :style="opacityStyle">
			<router-link 
				tag="div"
				to="/"
				class="detail-header__fixed--left"
			>
				<div class="iconfont detail-header__fixed--icon-back">&#xe624;</div>
			</router-link>
			<div class="detail-header__item">
				推荐详情
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name:'DetailHeader',
	components:{
	},	
	data:function(){
		return {
			showAbs:true,
			//:style=""动态样式用对象
			opacityStyle:{
				opacity:1
			}
		}
	},
	methods:{
		//页面滚动事件
		handleScroll(){
			//获取页面滚动距离top的值
			const top = document.documentElement.scrollTop;
			console.log(top);
			//判断top值在某段区域 执行的方法，:style修改透明度
			if(top > 40){
				let opacity = top/120
				if(opacity>1){
					opacity = 1
				}else{opacity = opacity}
				this.opacityStyle={
					opacity:opacity
				}
				console.log(this.opacityStyle.opacity)
				this.showAbs = false ;
			}else{
				this.showAbs = true
			}
			console.log(this.opacityStyle.opacity)
		},
		handleClick(){
			console.log('tesy')
		}
	},
	//因为使用<keep-alive>所以页面一展示就执行，而mounted不会执行，即之后的生命周期大部分用这个
	activated(){
		window.addEventListener('scroll',this.handleScroll)
		window.addEventListener('click',this.handleClick)
	},
	//滚动事件是全局事件，不是绑定在DOM或者组件上的事件，会污染其他页面
	//对全局事件的解绑
	//deactivated(){
	//	window.removeEventListener('scroll',this.handleScroll)
	//}
}
</script>

<style>
	.detail-header__abs{
		position: absolute;
		left: .2rem;
		top:.2rem;

		width: .8rem;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		border-radius: .4rem;
		background-color: rgba(0,0,0,0.8);
	}
	.detail-header__abs-back{
		color: #fff;
		font-size: .4rem;
	}
	.detail-header__fixed{
		z-index: 2;	/*解决没有header没有覆盖内容（透明度限制了最高0.8）*/
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		
		display: block;
		line-height:.86rem;
		text-align: center; 
		color:#fff;
		background-color: #00bcd4;
	}
	.detail-header__fixed--left{
		width:.64rem;
		float: left;
		text-align:center;
		color: #fff;
	}
	.detail-header__fixed--item{
		margin-left: 2.9rem;
		font-size: .32rem;
	}
</style>