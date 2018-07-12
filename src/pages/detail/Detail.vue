<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<detail-list></detail-list>
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
		}
	},
}
</script>

<style>
	
</style>