/*************************************

项目名称：Filmix
下载地址：https://too.st/8Go
更新日期：2024-03-08
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/appv2\.filmix\.com\.cn\/api\/v\d\/users url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/filmix.js

[mitm]
hostname = appv2.filmix.com.cn

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.is_vip = true;
yahe1023.vip_start_time = "2023-09-09T09:09:09+09:00";
yahe1023.vip_end_time = "2099-09-09T09:09:09+09:00";

$done({body : JSON.stringify(yahe1023)});