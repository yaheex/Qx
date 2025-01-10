/*************************************

项目名称：SODA-相机
下载地址：https://too.st/91w
更新日期：2024-03-26




**************************************

[rewrite_local]
^https?:\/\/purchase-soda-api\.snow\.me\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/soda.js

[mitm]
hostname = purchase-soda-api.snow.me

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.result = {
  "products" : [
    {
      "managed" : false,
      "status" : "CANCELLED",
      "startDate" : 1688988287000,
      "productId" : "com.snowcorp.soda.subscribe.oneyear",
      "expireDate" : 4092599349000
    }
  ],
  "activated" : true
};

$done({body : JSON.stringify(chxm1023)});