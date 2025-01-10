/*************************************

项目功能：一言 解锁会员/净化广告
下载地址：https://t.cn/Aini0veg




**************************************

[rewrite_local]
^https:\/\/app\.yiyan\.art\/yiyan url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/yiyan.js

[mitm]
hostname = app.yiyan.art

*************************************/


var chxm1023 = $response.body.replace(/viptype":"\d+"/g, 'viptype":"4"').replace(/banner":\[.+\]/g, 'banner":[]');$done(chxm1023);
