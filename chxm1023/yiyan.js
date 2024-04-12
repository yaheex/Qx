/*************************************

项目功能：一言 解锁会员/净化广告
下载地址：https://t.cn/Aini0veg

**************************************

[rewrite_local]
^https:\/\/app\.yiyan\.art\/yiyan url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/yiyan.js

[mitm]
hostname = app.yiyan.art

*************************************/


var yahee = $response.body.replace(/viptype":"\d+"/g, 'viptype":"4"').replace(/banner":\[.+\]/g, 'banner":[]');$done(yahee);
