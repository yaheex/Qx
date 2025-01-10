/*************************************

项目名称：知了-RSS聚合阅读
下载地址：https://t.cn/A6HJDSMI
更新日期：2024-05-20




**************************************

[rewrite_local]
^https?:\/\/api\.ivrfun\.com\/pingx\/v\d\/user\/getInfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/zhiliao.js

[mitm]
hostname = api.ivrfun.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data.subscribe = {
  ...chxm1023.data.subscribe,
  "expirationDate" : "2099-09-09T09:09:09.000Z",
  "productId" : "pingx.subs.12month",
  "whichType" : "SUBSCRIBE_USER",
  "purchaseDate" : "2024-05-20T00:00:00.000Z"
};

$done({body : JSON.stringify(chxm1023)});
