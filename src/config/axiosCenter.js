import { baseUrl } from './env';//baseurl

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {

    type = type.toUpperCase();
    url = baseUrl + url;
    console.log("request url:" + url);

    if (method == 'axios') {//axios框架网络进行

        if (type == 'GET') { //

        }
        else if (type == 'POST') {

        }
    }

    else if (window.fetch && method == 'fetch') { //兼容fetch的POST、GET


    }
}
