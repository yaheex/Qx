/*************************************

项目名称：AdGuard-Safari浏览器扩展
下载地址：https://t.cn/A6xe1oaK
更新日期：2025-01-08




**************************************

[rewrite_local]
^https:\/\/mobile-api\.adguard\.org\/api\/.+\/ios_validate_receipt\/(.*?) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/AdGuard.js

[mitm]
hostname = mobile-api.adguard.org

*************************************/


var ddm = JSON.parse($response.body);

ddm = {"products":[{"premium_status":"ACTIVE","product_id":"com.adguard.lifetimePurchase"}]};

$done({body : JSON.stringify(ddm)});
