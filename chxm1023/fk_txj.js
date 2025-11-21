/*************************************

项目名称：饭卡 - 记录饮食热量卡路里
下载地址：https://t.cn/A60P93t8
项目名称：贴心记 - 记录重要的人和事
下载地址：https://t.cn/A60P91Xj
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/fk_txj.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/fk_txj.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const yahe1023 = {};
const yahe1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);const app = 'cm';const list = {'cm':{name: 'Pro', id: 'com.wengqianshan.diet.pro'}};
const data = {
	"Author": "yahe1023",
	"Telegram" : "https://yaheex.github.io",
	"warning": "仅供学习，禁止转载或售卖",
	"original_purchase_date": "2022-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z",
	"expires_date": "2099-09-09T09:09:09Z",
	"ownership_type": "PURCHASED"
};

if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"];
	delete $request.headers["X-RevenueCat-ETag"];
	yahe1023.headers = $request.headers;
} else if (chxm1024 && yahe1024.subscriber) {
	yahe1024.subscriber.subscriptions = yahe1024.subscriber.subscriptions || {};
	yahe1024.subscriber.entitlement = yahe1024.subscriber.entitlement || {};
     for (const i in list) {
if (new RegExp(`^${i}`, `i`).test(app)) {
	yahe1024.subscriber.subscriptions[list[i].id] = data;
	yahe1024.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
	yahe1024.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
			break;
		}
	}
   yahe1023.body = JSON.stringify(yahe1024);
}

$done(yahe1023);
