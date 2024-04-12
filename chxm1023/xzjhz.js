/*************************************

项目功能：小组件盒子 解锁永久VIP
下载地址：https://t.cn/A6oDCwJ6


**************************************

[rewrite_local]
^https:\/\/widget-box-api\.codefuture\.top\/v1\/users\/me url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/xzjhz.js

[mitm]

hostname = widget-box-api.codefuture.top

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);

yahee.inviteCodeAmountLeft = 5;
yahee.isVip = true;
yahee.vipExpiredAt = "0";

body = JSON.stringify(yahee);

$done({body});
