import axios from "axios";//推荐使用axios，兼容ie浏览器

//封装axios网络请求，数据解析

export default async () => {

    axios.get('url').then(function (response) { console.log(response) }).catch(function (error) {
        Console.log(error);
    });
}