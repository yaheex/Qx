/*************************************

项目名称：漫读-电子书阅读器
下载地址：https://t.cn/A6TeeJiV
更新日期：2024-04-30




**************************************

[rewrite_local]
^http:\/\/enjoy_reading_pro\.particlethink\.com:8083\/app\/api\/v\d\/user\/is_vip url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/mandu.js

[mitm]
hostname = pro.particlethink.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = true;

$done({body : JSON.stringify(chxm1023)});