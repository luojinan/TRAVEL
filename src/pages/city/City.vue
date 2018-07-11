<template>
	<div>
		<city-header></city-header>
		<city-search :list="cities"></city-search>
		<city-list 
			:hotCities="hotCities" 
			:list="cities"
			:letter="letter"
		>
		</city-list>
		<city-alphabet 
			:list="cities"
			@change="handleLetterChange"
		>
		</city-alphabet>
	</div>
</template>

<script>
import CityHeader from "./components/CityHeader"
import CitySearch from "./components/CitySearch"
import CityList from "./components/CityList"
import CityAlphabet from "./components/CityAlphabet"
import axios from "axios"

export default {
	name:'City',
	components:{
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},	
	data:function(){
		return {
			hotCities:[],
			cities:{},
			letter:''
		}
	},

	methods:{
		getCityInfo(){
			axios.get('static/mock/city.json')
				.then(this.getCityInfoSucc)
		},
		getCityInfoSucc(res){
			console.log(res)
			const data = res.data.data
			this.hotCities = data.hotCities
			this.cities = data.cities
		},

		//接收子组件传递的数据，文本
		handleLetterChange(letter){
			this.letter = letter
		}

	},
	//生命周期挂载ajax
	mounted(){
		this.getCityInfo();
	}
}
</script>

<style>
	
</style>