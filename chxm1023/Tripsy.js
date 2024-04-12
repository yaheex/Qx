/*************************************

项目名称：Tripsy-旅行规划者
下载地址：https://t.cn/A60jMYum
更新日期：2024-02-22

**************************************

[rewrite_local]
^https?:\/\/firstclass\.tripsy\.app\/api\/v\d\/receipt\/update url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Tripsy.js

[mitm]
hostname = firstclass.tripsy.app

*************************************/


var yahee = JSON.parse($response.body);

yahee = {
  "is_premium" : true,
  "expiration_intent" : 1,
  "is_trial" : true,
  "subscription" : "premium_plan",
  "expiration_date" : "2099-09-09T09:09:09Z",
  "is_introductory_offer" : true,
  "is_in_billing_retry_period" : true
};

$done({body : JSON.stringify(yahee)});