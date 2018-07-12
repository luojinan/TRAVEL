<template>
	<div class="detail-list">
		<div
			v-for="(item,index) of list"
			:key="index"
			class="detail-list__item border-bottom"
		>
			{{item.title}}
			{{item.text}}
			<span v-show="item.title" class="iconfont detail-list__icon">&#xe6aa;</span>
			<!--判断是否有数据-->
			<div v-if="item.content">
				<!--有则使用自身作为组件（样式、逻辑(循环)相同）-->
				<detail-list :list="item.content"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	/********使用递归组件（即自身作为组件调用自身）***********/
	/*要完全相同，数据结构、变量名 才能使用*/
	/*3层数据的样式和内容太难操作了，实际上少用吧*/
	name:'DetailList',	//可作为自身组件直接使用<detail-list>
	components:{
	},	
	props:{
		list:Array	//数组内对象含数组； 二维数组：数组中含数组
	},
	data:function(){
		return {
		}
	},
}
</script>

<style>
	.detail-list{
		
	}
	.detail-list__item{
		line-height: .8rem;
		font-size: .32rem;
		padding: 0 .2rem;
	}
</style>