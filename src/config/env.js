//配置dev与prod,提供给网络js进行封装


let baseUrl = '';
let routerMode = 'hash';
let baseImgUrl = '';
if (process.env.NODE_ENV) {
    baseUrl = '';
    baseImgUrl = '';

} else {
    baseUrl = 'localhost://8080';
    baseImgUrl = '';
}


export {
    baseImgUrl, baseUrl, routerMode

}
