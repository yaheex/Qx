/*************************************

项目名称：听书助手
下载地址：https://too.st/9ux
更新日期：2024-04-15




**************************************

[rewrite_local]
^https?:\/\/www\.huojiwangluo\.cn\/ting\/user\/.* url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/tingshuzhushou.js

[mitm]
hostname = www.huojiwangluo.cn

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.vip_expire = 4092599349;
chxm1023.vip_state = 1;

$done({body : JSON.stringify(chxm1023)});