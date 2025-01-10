/*************************************

项目名称：Agenda
下载地址：https://t.cn/A6ouQyEq
更新日期：2025-01-08




**************************************

[rewrite_local]
^https:\/\/accounts\.agenda\.com\/users\/.*\/license url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Agenda.js

[mitm]
hostname = accounts.agenda.com

*************************************/


var ddm = JSON.parse($response.body); 

ddm = {
  "unlockExpiryMobile" : 4092599349,
  "isSubscribedMobile" : true,
  "informUserOfPendingBonus" : false,
  "licenseStatus" : 2,
  "hasLifetimeUnlock" : true,
  "isSubscribed" : true,
  "freeTrialStatus" : 1,
  "unlockExpiry" : 4092599349,
  "error" : 0,
  "licenseStatusMobile" : 2,
  "universalPurchaseAvailable" : true
};

$done({body : JSON.stringify(ddm)});
