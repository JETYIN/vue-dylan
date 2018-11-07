//配置dev与prod,提供给网络js进行封装


let baseUrl = '';
let routerMode = 'hash';
let baseImgUrl = '';
if (process.env.NODE_ENV) {
    baseUrl = 'http://localhost:9000';//配置spring cloud地址--必须加入http前缀
    baseImgUrl = '';

} else {
    baseUrl = 'http://localhost:9000';//配置spring cloud地址--必须加入http前缀
    baseImgUrl = '';//可同步部署图片地址
}


export {
    baseImgUrl, baseUrl, routerMode

}
