/*************************************

应用名称：Context - 基于语境学英语AI工具
脚本功能：解锁Plus
下载地址：https://too.st/eXS
更新日期：2025-08-13
脚本作者：@yahe1023

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/rc\.visionarytech\.ltd\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Context.js
^https?:\/\/rc\.visionarytech\.ltd\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Context.js

[mitm]
hostname = rc.visionarytech.ltd

*************************************/


const ddm = {};
const yahe1023 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const name = "plus";
const appid = "context_1y";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  ddm.headers = $request.headers;
} else if (yahe1023 && yahe1023.subscriber) {
  yahe1023.subscriber.subscriptions = yahe1023.subscriber.subscriptions || {};
  yahe1023.subscriber.entitlements = yahe1023.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"expires_date": "2099-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z"
	};
  yahe1023.subscriber.entitlements[(name)] = (data);
  yahe1023.subscriber.subscriptions[(appid)] = {  ...data,	"Author": "YaHee, Studio.",	"Telegram": "https://t.me/yahe1023",	"warning": "仅供学习，禁止转载或售卖",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  ddm.body = JSON.stringify(yahe1023);
}

$done(ddm);