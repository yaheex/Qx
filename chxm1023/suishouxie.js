/*************************************

项目名称：随手写
下载地址：https://t.cn/A6OUT4Qn

**************************************

[rewrite_local]
http:\/\/www\.kkmop\.com\/vipMsg1 url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/suishouxie.js

[mitm]
hostname = www.kkmop.com

*************************************/


var yahee = JSON.parse($response.body);

yahee.resultMsg = JSON.stringify({ ...JSON.parse(yahee.resultMsg), vip: true, vipDays: 4092599349,  vipDateTo: "2099-09-09T09:09:09Z",  viptime: "2099-09-09T09:09:09Z" });

$done({ body: JSON.stringify(yahee)});
