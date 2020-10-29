import axios from 'axios'


export  function request(config) {

		// 1.创建axios的实例
		const instance = axios.create({
			baseURL: 'http://152.136.185.210:8000/api/w6',
			timeout: 8000
		});
		return  instance(config);

}
