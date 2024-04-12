/*************************************

项目名称：Promova
软件版本：6.1.1 Time：2023.8.16
下载地址：https://is.gd/LYD5RA

**************************************

[rewrite_local]
^https:\/\/api\.panda\.boosters\.company\/v1\/subscription-status url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Promova.js

[mitm]
hostname = api.panda.boosters.company

*************************************/


var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "state" : "ok",
  "subscriptions" : {
    "ios" : [
      {
        "product_id" : "tenwords_1y_119.99",
        "payment_status" : "ok",
        "is_intro_offer" : false,
        "payment_type" : "trial",
        "order_id" : "999999999999",
        "duration" : "9999999999999.000000 days",
        "is_trial_period" : false,
        "subscription_id" : "4093063",
        "purchase_time" : "2022-08-16T11:09:15Z",
        "expiry_time" : "2022-12-31T11:09:15Z",
        "state" : "ok"
      }
    ],
  }
}

body = JSON.stringify(obj);
$done({body});
