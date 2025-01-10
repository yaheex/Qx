/*************************************

项目名称：时间日志
下载地址：https://t.cn/A6QSJY0L
更新日期：2024-06-27




**************************************

[rewrite_local]
^http:\/\/liujia95\.xyz\/v\d\/user\/(get_user|register) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/sjrz.js

[mitm]
hostname = liujia95.xyz

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.body.vipType = 4;

$done({body : JSON.stringify(chxm1023)});
