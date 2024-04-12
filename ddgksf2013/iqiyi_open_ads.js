/***********************************

> 应用名称：爱奇艺去除开屏广告
> 更新时间：2023-03-17

请自行在本地添加分流
host-suffix, cupid.iqiyi.com, direct

[rewrite_local]

^https?:\/\/.*cupid\.iqiyi\.com\/mixer\? url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/ddgksf2013/iqiyi_open_ads.js

[mitm]

hostname=*cupid.iqiyi.com

***********************************/



let obj=JSON.parse($response.body);delete obj.adSlots,$done({body:JSON.stringify(obj)});
