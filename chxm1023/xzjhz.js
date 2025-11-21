/*************************************

项目功能：小组件盒子 解锁永久VIP
下载地址：https://t.cn/A6oDCwJ6
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]
^https:\/\/widget-box-api\.codefuture\.top\/v1\/users\/me url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/xzjhz.js

[mitm]

hostname = widget-box-api.codefuture.top

*************************************/


var body = $response.body;
var yahe1023 = JSON.parse(body);

yahe1023.inviteCodeAmountLeft = 5;
yahe1023.isVip = true;
yahe1023.vipExpiredAt = "0";

body = JSON.stringify(yahe1023);

$done({body});
