/*************************************

项目功能：网速管家 解锁VIP（美区下载）
下载地址：https://t.cn/A6ou0r5U
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/wsgj.js

[mitm]

hostname = api-v3.speedtest.cn

*************************************/


var body = $response.body;
var yahe1023 = JSON.parse(body);

yahe1023.data.integral = "999999999";
yahe1023.data.vipExpire = "2099-09-09 09:09:09";
yahe1023.data.isVip = 1;

body = JSON.stringify(yahe1023);

$done({body});
