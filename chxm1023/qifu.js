/*************************************

项目功能：起伏 解锁VIP
下载地址：https://t.cn/A6ouQzMi
**************************************

[rewrite_local]
https?:\/\/api\.risingfalling\.com\/api\/vip\/detail url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/yahee/qifu.js

[mitm] 
hostname = api.risingfalling.com

*************************************/


var yahee = JSON.parse($response.body);
yahee.body={"isVip":true,"vipEndTime":4092599350000};
$done({body: JSON.stringify(yahee)});
