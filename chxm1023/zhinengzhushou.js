/*************************************

项目名称：智能助手
下载地址：https://t.cn/A6lVgFg6
版本支持：1.0.3
更新日期：2023-12-14
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(www\.kaolahome\.com\/xunnews|cat-revenuecat-qscqkotbrh\.cn-hongkong\.fcapp\.run)\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/zhinengzhushou.js
^https?:\/\/(www\.kaolahome\.com\/xunnews|cat-revenuecat-qscqkotbrh\.cn-hongkong\.fcapp\.run)\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/zhinengzhushou.js

[mitm]
hostname = www.kaolahome.com, cat-revenuecat-qscqkotbrh.cn-hongkong.fcapp.run

*************************************/


const yahe1023 = {};
const yahe1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "vip";
const appid = "sageapp_777_1y";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  yahe1023.headers = $request.headers;
} else if (chxm1024 && yahe1024.subscriber) {
  yahe1024.subscriber.subscriptions = yahe1024.subscriber.subscriptions || {};
  yahe1024.subscriber.entitlements = yahe1024.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"expires_date": "2099-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z"
	};
  yahe1024.subscriber.entitlements[(name)] = (data);
  yahe1024.subscriber.subscriptions[(appid)] = {  ...data,	"Author": "yahe1023",	"Telegram": "https://yaheex.github.io",	"warning": "仅供学习，禁止转载或售卖",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  yahe1023.body = JSON.stringify(yahe1024);
}

$done(yahe1023);
