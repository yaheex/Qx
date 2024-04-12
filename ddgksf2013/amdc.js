/***********************************************
> 应用名称：amdc脚本
> 更新时间：2024-01-21
***********************************************/

//使用AMDC的APP有：咸鱼、淘宝、盒马、高德、菜鸟、飞猪

const version = 'V1.0.8';



var ua=$request.headers["User-Agent"]||$request.headers["user-agent"];/(AMap|Cainiao|%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C|Hema4iPhone|Moon|DMPortal)/.test(ua)?$done({body:"yahee"}):$done({});
