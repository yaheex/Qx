/*************************************

项目名称：图纸通
下载地址：https://t.cn/A6pbMy8f




**************************************

[rewrite_local]
^https?:\/\/api\.tuzhitong\.com\/api\/User\/GetUserVipInfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/tuzhitong.js

[mitm]
hostname = api.tuzhitong.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "status" : {
    "msg" : "请求成功",
    "code" : 1
  },
  "data" : {
    "vipType" : 2,
    "personalInfo" : {
      "expireTime" : "2099-09-09",
      "expireType" : -1,
      "isVIP" : true,
      "remainDay" : 99999
    },
    "canReceive" : 0,
    "vipInfo2D" : {
      "expireTime" : "2099-09-09",
      "expireType" : -1,
      "isVIP" : true,
      "remainDay" : 99999
    }
  }
};

$done({body : JSON.stringify(chxm1023)});
