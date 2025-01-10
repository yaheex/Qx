/*************************************

项目功能：起伏 解锁VIP
下载地址：https://t.cn/A6ouQzMi



**************************************

[rewrite_local]
https?:\/\/api\.risingfalling\.com\/api\/vip\/detail url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/qifu.js

[mitm] 
hostname = api.risingfalling.com

*************************************/


var chxm1023 = JSON.parse($response.body);
chxm1023.body={"isVip":true,"vipEndTime":4092599350000};
$done({body: JSON.stringify(chxm1023)});
