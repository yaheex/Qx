/*************************************

项目名称：Hyperweb Safari浏览器扩展
下载地址：https://t.cn/A60JTajr
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
https?:\/\/zy6kcqa01a\.execute-api\.us-east-2\.amazonaws\.com\/prod\/verifyReceipt url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Hyperweb.js

[mitm]
hostname = zy6kcqa01a.execute-api.us-east-2.amazonaws.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023 = {
  "autoRenewStatus" : "1",
  "isActive" : true,
  "expireDateMs" : 4092599349000,
  "expirationIntent" : null,
  "productId" : "ai.laso.ios.HyperWeb.yearly.subscription"
};

$done({body : JSON.stringify(yahe1023)});