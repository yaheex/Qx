/*************************************

项目名称：图趣AI
下载地址：https://t.cn/A6WxvZTU
更新日期：2024-04-02




**************************************

[rewrite_local]
^https?:\/\/meitu\.minecaller\.com\/api\/users url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/tuqu.js

[mitm]
hostname = meitu.minecaller.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  ...chxm1023,
  "chargePoint" : 999,
  "diamonds" : 9999,
  "vipPoint" : 9999,
  "vipOpeningDate" : "2024-04-01",
  "freeCount" : 9999,
  "trialed" : true,
  "vip" : true,
  "vipExpireDate" : "2099-09-09",
  "raffleCount" : 99
};

$done({body : JSON.stringify(chxm1023)});