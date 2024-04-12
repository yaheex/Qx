/*************************************

项目名称：暴走P图
下载地址：https://t.cn/A6WwGEm7

**************************************

[rewrite_local]
https?:\/\/api\.intelimeditor\.com\/user\/loginByThirdPlatformApp url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/baozouptu.js

[mitm]
hostname = api.intelimeditor.com

*************************************/


var yahee = JSON.parse($response.body);

yahee.data.lookVipCount = 3;
yahee.data.vipExpireTime = "4092599349000";

$done({body : JSON.stringify(yahee)});
