/*************************************

项目名称：Xmind-思维导图
下载地址：https://t.cn/AipCL5zE

**************************************

[rewrite_local]
^https?:\/\/(?:www\.)?xmind\..*\/.+\/(devices|token\/.+) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Xmind.js

[mitm]
hostname = *xmind.*

*************************************/


var yahee = JSON.parse($response.body);
const vip = /https:\/\/www\.xmind\.cn\/_res\/devices/;
const token = /https:\/\/xmind\.cn\/_res\/token\/.+/;

if (vip.test($request.url)) {
    yahee = {
      "license" : {
        "status" : "sub",
        "expireTime" : 4092599349000
      },
      "_code" : 200,
      "raw_data" : "GfxYgAqnrQ\/ggD9UwqnZyAj6FKnopXzM8s5m3eZLOsmVr4FwCzv41qTmgi\/u72cv+jpaAoljaEPti1twzOS7X7KUPY1KNJ2xalbS7SXbvFHSvs21QXjaUtIOkeJWAl4\/vHl4IvMeHTBVqD8mFCXOmvnBPLRMAJEPgHEJYF1InvQ="};
}

if (token.test($request.url)) {
    yahee.expireDate = 4092599349;
    yahee.token = "f50633ea8eb04cbb85962b99c47045d7AjOobEGo";
}

$done({body : JSON.stringify(yahee)});
