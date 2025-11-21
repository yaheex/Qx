/*************************************

项目名称：格式转换
下载地址：https://t.cn/A6KtskIp
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
http:\/\/format-api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/gszh.js

[mitm]
hostname = format-api.netpock.com

*************************************/


var body = $response.body;
var yahe1023 = JSON.parse(body);

yahe1023.data.is_vip = true;
yahe1023.data.wps_size = 999;
yahe1023.data.vip_expiration_time = 4092599350;

$done({body : JSON.stringify(yahe1023)});
