/*************************************

项目名称：exping地图标记
下载地址：https://t.cn/A6OZKTpD




**************************************

[rewrite_local]
^https?:\/\/api\.expingworld\.com\/users url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/exping.js

[mitm]
hostname = api.expingworld.com

*************************************/


var chxm1023 = JSON.parse($response.body);
var vip = {
      "channel" : "ios",
      "vipType" : "year",
      "expiredTimestamp" : 4092599349,
      "isExpired" : false,
      "autoRenewStatus" : 0,
      "originalOrder" : {
        "status" : 1,
        "channel" : "ios",
        "createdTimestamp" : 1666666666,
        "id" : 9846,
        "orderSn" : "22222222222222222222"
    }
};
const user = 'users/0';
const info = 'users/vip-info';

if ($request.url.indexOf(info) != -1){
  chxm1023.data = (vip);
}

if ($request.url.indexOf(user) != -1){
  chxm1023.data.vipInfo = (vip);
}

$done({body : JSON.stringify(chxm1023)});
