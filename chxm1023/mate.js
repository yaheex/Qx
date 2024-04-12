/*************************************

项目名称：Mate-翻译神器 解锁订阅
下载地址：https://t.cn/A69OzKuZ

**************************************

[rewrite_local]
^https:\/\/asia\.gikken\.co\/matesync\/(subscription|login|register_user|check_user) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/mate.js

[mitm]
hostname = asia.gikken.co

*************************************/


var yahee = JSON.parse($response.body);
const xxa = '/matesync/subscription';
const xxb = '/matesync/register_user';
const xxc = '/matesync/login';
const xxd = '/matesync/check_user';
const hyxx = {
  "next_bill_date" : "2099-09-09",
  "next_payment_amount" : "0",
  "paused_from" : null,
  "billing_period" : "lifetime",
  "cancel_url" : "itms-apps://apps.apple.com/account/subscriptions",
  "isSubscriptionVerified" : true,
  "unit_price" : "0",
  "old_status" : null,
  "update_url" : "itms-apps://apps.apple.com/account/subscriptions",
  "isLifetime" : true,
  "cancellation_effective_date" : "2099-09-09",
  "currency" : "CNY",
  "status" : "active",
  "endsOn" : "2099-09-09"
};

if ($request.url.indexOf(xxa) != -1){
yahee = (hyxx);}

if ($request.url.indexOf(xxb) != -1){
yahee.subscriptionInfo = (hyxx);}

if ($request.url.indexOf(xxc) != -1){
yahee.subscriptionInfo = (hyxx);}

if ($request.url.indexOf(xxd) != -1){
yahee = {
  "registered" : true
};}

$done({body : JSON.stringify(yahee)});
