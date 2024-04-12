/*************************************

项目名称：波点音乐
下载地址：https://t.cn/A6NLgAZW

**************************************

[rewrite_local]
https:\/\/bd-api\.kuwo\.cn url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/bodianyinyue.js

[mitm]
hostname = bd-api.kuwo.cn

*************************************/


var body = $response.body;
body = body.replace(/\"expireDate":\d+/g, '\"expireDate":4092599349000');
body = body.replace(/\"isVip":\d+/g, '\"isVip":1');
body = body.replace(/\"vip":\d+/g, '\"vip":1');
$done({body});
