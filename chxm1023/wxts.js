/*************************************

项目名称：微信听书
下载地址：https://t.cn/A6pj4xeR

**************************************

[rewrite_local]
^https?:\/\/i\.at\.qq\.com\/pay\/memberinfo.+ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/wxts.js

[mitm]
hostname = i.at.qq.com

*************************************/


var yahee = JSON.parse($response.body);

yahee = {
  "subscriptionPeriod" : 2405400000,
  "memberCount" : 308000,
  "subscriptionPrice" : 99999999,
  "subscriptionButtonLabel" : "立即续费",
  "hasPromoRight" : false,
  "autoRenewableTime" : 0,
  "autoRenewableChannel" : 0,
  "isAutoRenewable" : 1,
  "subscriptionDesc" : "已解锁付费会员",
  "expiresIn" : 2405400000,
  "endTime" : 4092599349,
  "historyAutoRenewable" : true,
  "isMember" : 1,
  "isExperienceMember" : true,
  "startTime" : 1666666666
};

$done({body : JSON.stringify(yahee)});
