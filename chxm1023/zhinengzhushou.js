/*************************************

项目名称：智能助手
下载地址：https://t.cn/A6lVgFg6
版本支持：1.0.3
更新日期：2023-12-14

**************************************

[rewrite_local]
^https?:\/\/(www\.kaolahome\.com\/xunnews|cat-revenuecat-qscqkotbrh\.cn-hongkong\.fcapp\.run)\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/zhinengzhushou.js
^https?:\/\/(www\.kaolahome\.com\/xunnews|cat-revenuecat-qscqkotbrh\.cn-hongkong\.fcapp\.run)\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/zhinengzhushou.js

[mitm]
hostname = www.kaolahome.com, cat-revenuecat-qscqkotbrh.cn-hongkong.fcapp.run

*************************************/


const yahee = {};
const yahee1 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "vip";
const appid = "sageapp_777_1y";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  yahee.headers = $request.headers;
} else if (yahee1 && yahee1.subscriber) {
  yahee1.subscriber.subscriptions = yahee1.subscriber.subscriptions || {};
  yahee1.subscriber.entitlements = yahee1.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"expires_date": "2099-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z"
	};
  yahee1.subscriber.entitlements[(name)] = (data);
  yahee1.subscriber.subscriptions[(appid)] = {  ...data,	"Author": "yahee",	"Telegram": "https://t.me/yahee",	"warning": "YaHee",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  yahee.body = JSON.stringify(yahee1);
}

$done(yahee);
