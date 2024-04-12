/**********************************************

> 应用名称：555去广告脚本
> 更新时间：2024-03-31

[rewrite_local]

^https?:\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+){1,3}(:\d+)?\/api\/v\d\/movie\/index_recommend url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/ddgksf2013/555Ad.js
^https?:\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+){1,3}(:\d+)?\/api\/v\d\/advert url reject-200

[mitm]

hostname = *.qyfxgd.cn, *.weilai555.com, *.ecoliving168.com

**********************************************/


let obj=JSON.parse($response.body);obj.data=obj.data.filter(t=>"advert_self"!==t.layout),obj.data.forEach(t=>{t.list=t.list.filter(t=>3!==t.type)}),$done({body:JSON.stringify(obj)});
