/*************************************

项目名称：格式转换
下载地址：https://t.cn/A6KtskIp




**************************************

[rewrite_local]
http:\/\/format-api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/gszh.js

[mitm]
hostname = format-api.netpock.com

*************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.data.is_vip = true;
chxm1023.data.wps_size = 999;
chxm1023.data.vip_expiration_time = 4092599350;

$done({body : JSON.stringify(chxm1023)});
