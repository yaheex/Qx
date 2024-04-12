/*************************************

项目名称：Drafts
下载地址：https://t.cn/A6OoCm0s


**************************************

[rewrite_local]
^https?:\/\/backend\.getdrafts\.com\/api\/v\d\/verification\/(account_status|verify_receipt) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Drafts.js

[mitm]
hostname = backend.getdrafts.com

*************************************/


var yahee = JSON.parse($response.body);

yahee = {
  "active_expires_at" : "2099-09-09T09:09:09Z",
  "is_subscription_active" : true,
  "active_subscription_type" : "none",
  "is_blocked" : false,
  "has_had_free_trial" : true
};

$done({body : JSON.stringify(yahee)});
