import axios from 'axios'
export function request(config){ //配置axios
	const $http = axios.create({
		timeout:5000
	})
	return $http(config)
}


// 新建一个文件 连接接口


import {request} from './uits.js'
export function gethome(data) {
	return request({
		url: '/foo',
		params: data
	})
}
export function getmode(){
	return request({
		url:'./cont.js'
	})
}
