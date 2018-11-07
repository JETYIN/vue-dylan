import axios from 'axios';
import { baseUrl } from './env';
import { Message } from 'element-ui';

axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 10000;

axios.interceptors.request.use(//拦截请求（如某些场景或某些应用需要附带token进行请求）
    config => {//可进行设置拦截请求，在头上设置token
        return config;
    }, error => {
        Message.error({ message: '请求超时!' });
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    response => {
        return response;
    }, error => {
        if (error && error.response) {
            console.log("interceptor any error");

        }
    }
)


export default async(url = '', data = {}, type = 'GET') => {

    var GET = 'get';
    var POST = 'post';
    if (type == GET) {
        axios.get(url, {
            params: data
        }).then(response => {

        }).catch(error => {

        })
    }

    else if (type == POST) {
        axios.post(url, data).then(response => {

        }).catch(error => {

        })

    }


}