/*************************************

项目名称：Calendars 日历/计划
下载地址：https://t.cn/A6Kpq9a6
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/license\.pdfexpert\.com\/api\/.+\/calendarslite\/subscription\/refresh url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/calendars.js

[mitm]
hostname = license.pdfexpert.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023 = {
  "originalTransactionId" : 490001314520000,
  "inAppStates" : [
    {
      "originalTransactionId" : 490001314520000,
      "productId" : "com.readdle.CalendarsLite.subscription.year20trial7",
      "subscriptionState" : "trial",
      "productName" : "subscription",
      "subscriptionExpirationDate" : "09:09 09/09/2099",
      "isEligibleForIntroPeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "type" : "subscription",
      "isInGracePeriod" : false,
      "isInBillingRetryPeriod" : false,
      "entitlements" : [
"ios.pe.subscription.CalendarsLite"
      ]
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.CalendarsLite",
  "receiptId" : 1671234567890,
  "statisticsInfo" : {
    "events" : [

    ]
  },
  "externalId" : "2f1fa60b-19a4-4d6e-9a1c-4d09569979c5"
};

$done({body : JSON.stringify(yahe1023)});
