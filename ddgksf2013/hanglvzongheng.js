/***********************************************
> 应用名称：航旅纵横脚本
> 更新时间：2022-10-26
***********************************************/


const version = 'V1.0.2';

var ua=$request.headers.rpid||$request.headers.Rpid;ua.includes("10000012")||ua.includes("1000019")?$done({status:"HTTP/1.1 404 Not Found"}):$done({});
