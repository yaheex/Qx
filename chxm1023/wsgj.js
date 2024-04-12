/*************************************

项目功能：网速管家 解锁VIP（美区下载）
下载地址：https://t.cn/A6ou0r5U

**************************************

[rewrite_local]

^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/wsgj.js

[mitm]

hostname = api-v3.speedtest.cn

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);

yahee.data.integral = "999999999";
yahee.data.vipExpire = "2099-09-09 09:09:09";
yahee.data.isVip = 1;

body = JSON.stringify(yahee);

$done({body});
