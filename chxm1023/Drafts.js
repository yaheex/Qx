/*************************************

项目名称：Drafts
下载地址：https://t.cn/A6OoCm0s
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/backend\.getdrafts\.com\/api\/v\d\/verification\/(account_status|verify_receipt) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Drafts.js

[mitm]
hostname = backend.getdrafts.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023 = {
  "active_expires_at" : "2099-09-09T09:09:09Z",
  "is_subscription_active" : true,
  "active_subscription_type" : "none",
  "is_blocked" : false,
  "has_had_free_trial" : true
};

$done({body : JSON.stringify(yahe1023)});
