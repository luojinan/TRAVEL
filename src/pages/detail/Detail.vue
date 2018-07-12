<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<detail-list :list="detailList"></detail-list>
		<div class="test"></div>
	</div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'

export default {
	name:'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},	
	data:function(){
		return {
			detailList:[{
				title:'成人票',
				content:[{
					title:'成人三馆联票',
					content:[{
						text:'这是内容这是内容这是内容这是内容这是内容'
					}]
				},{
					title:'成人五馆联票'
				}]
			},{
				title:'学生票'
			},{
				title:'儿童票'
			}]
		}
	},
}
</script>

<style>
	.test{
		height: 20rem;
	
	}
</style>