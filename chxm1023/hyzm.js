/*************************************

项目功能：绘影字幕 解锁VIP
下载地址：https://t.cn/A6oe27Yx

**************************************

[rewrite_local]
^https:\/\/api\.bluepulse\.cn\/bluepulse-caption-server-front\/api\/v1\/\/user\/app-vip-info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/yahee/hyzm.js

[mitm] 
hostname = api.bluepulse.cn

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);

yahee.data.isAppVip = 1;
yahee.appVipText = "永久VIP";
yahee.registerTime = 4092599350000;

body = JSON.stringify(yahee);
$done({body});
