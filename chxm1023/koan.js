/*************************************

项目名称：Koan-提问日记
下载地址：https://t.cn/A6O55spC

**************************************

[rewrite_local]
^https?:\/\/koan\.bopulab\.cn\/(user\/getBriefByUserIdV3|payment\/iosIap\/receipt) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/koan.js

[mitm]
hostname = koan.bopulab.cn

*************************************/


var yahee = JSON.parse($response.body);

yahee.data["memberCategory"] = 1;
yahee.data["memberExpiredAt"] = "4092599349000";

$done({body : JSON.stringify(yahee)});
