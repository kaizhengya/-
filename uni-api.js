const baseUrl = '' //URL
export const api = (opt)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl + opt.url,
			method:opt.mesthod || 'GET',
			data:opt.data || {},
			success:(res)=>{
				resolve(res)
			},
			fail:(err)=>{
				reject(err)
			}
		})
	})
}

/*
 main.js import {api} from '',
 
 Vue.prototype.$api = api
 
 
 页面内使用
 
 this.$api({
	 url:'',
	 method:'',
	 data:{
		 
	 }
 }).then(res=>{
	 
 })

*/