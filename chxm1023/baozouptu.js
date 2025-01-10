/*************************************

项目名称：暴走P图
下载地址：https://t.cn/A6WwGEm7
更新日期：2025-01-09




**************************************

[rewrite_local]
https?:\/\/api\.intelimeditor\.com\/user\/loginByThirdPlatformApp url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/baozouptu.js

[mitm]
hostname = api.intelimeditor.com

*************************************/


var ddm = JSON.parse($response.body);

ddm.data.lookVipCount = 3;
ddm.data.vipExpireTime = "4092599349000";

$done({body : JSON.stringify(ddm)});
