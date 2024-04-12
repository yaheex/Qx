/*************************************

项目名称：大神水印
下载地址：https://t.cn/A6Kfbf71

**************************************

[rewrite_local]
^https:\/\/dashen.*\.shuiyinyu\.com\/m\/user\/get_user_info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/dssy.js

[mitm]
hostname = dashen*.shuiyinyu.com

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);

yahee.data.gift_tip = "礼券999999999";
yahee.data.vip_expire_time = 4092599350000;
yahee.data.auto_subscribe_or_permanent_vip = true;

$done({body : JSON.stringify(yahee)});

