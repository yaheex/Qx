/*************************************

项目名称：格式转换
下载地址：https://t.cn/A6KtskIp

**************************************

[rewrite_local]
http:\/\/format-api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/gszh.js

[mitm]
hostname = format-api.netpock.com

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);

yahee.data.is_vip = true;
yahee.data.wps_size = 999;
yahee.data.vip_expiration_time = 4092599350;

$done({body : JSON.stringify(yahee)});
