<template>
  <div id="app">
  	<!--缓存加载过路由的页面不再重新获取ajax （切换城市和详情页面要重新加载ajax）-->
  	<keep-alive exclude="Detail">
    	<router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
