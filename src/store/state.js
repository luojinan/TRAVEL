//try catch避免浏览器不兼容 localStorage
let defaultCity = '北京'
try {
	if(localStorage.city){
		defaultCity = localStorage.city
	}
}catch(e){}

export default {
	city:defaultCity
}
