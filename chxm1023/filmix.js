/*************************************

项目名称：Filmix
下载地址：https://too.st/8Go
更新日期：2024-03-08




**************************************

[rewrite_local]
^https?:\/\/appv2\.filmix\.com\.cn\/api\/v\d\/users url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/filmix.js

[mitm]
hostname = appv2.filmix.com.cn

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.is_vip = true;
chxm1023.vip_start_time = "2023-09-09T09:09:09+09:00";
chxm1023.vip_end_time = "2099-09-09T09:09:09+09:00";

$done({body : JSON.stringify(chxm1023)});