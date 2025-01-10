/*************************************

项目名称：爱推文
下载地址：https://t.cn/A60zO7ur
更新日期：2025-01-08




**************************************

[rewrite_local]
^https?:\/\/twios\.styleart\.cn url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/aituiwen.js

[mitm]
hostname = twios.styleart.cn

*************************************/


var body = $response.body;

body = body.replace(/\"vipType":\d+/g, '\"vipType":1');
body = body.replace(/\"isVip":\w+/g,'\"isVip":true');
body = body.replace(/\"vipEndTime":".*?"/g,'\"vipEndTime":"2099-09-09 09:09:09"');
body = body.replace(/\"expireAt":\d+/g,'\"expireAt":4092599349000');
body = body.replace(/\"memberPoints":\d+/g, '\"memberPoints":9999999');
body = body.replace(/\"purchasedPoints":\d+/g, '\"purchasedPoints":9999999');

$done({body});
