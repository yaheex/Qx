/*************************************

项目名称：Splice
下载地址：https://t.cn/A600fE6J




**************************************

[rewrite_local]
^https?:\/\/splice\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/splice.js

[mitm]
hostname = splice.oracle.bendingspoonsapps.com

*************************************/


chxm1023["me"]["active_subscriptions_ids"] = ["com.path36.SpliceFree.1y_t150_bundle"];
chxm1023["me"]["active_bundle_subscriptions"] = [{
   "expiry" : "2099-09-09T09:09:09+00:00",
   "product_id" : "com.path36.SpliceFree.1y_t150_bundle",
   "features" : ["unlock"]
  }];
chxm1023["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09+00:00";
$done({body : JSON.stringify(chxm1023)});