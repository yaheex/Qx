/*************************************

项目名称：AdGuard-Safari浏览器扩展
下载地址：https://t.cn/A6xe1oaK

**************************************

[rewrite_local]

^https:\/\/mobile-api\.adguard\.org\/api\/.+\/ios_validate_receipt\/(.*?) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/AdGuard.js

[mitm]
hostname = mobile-api.adguard.org

*************************************/


var yahee = JSON.parse($response.body);

yahee = {"products":[{"premium_status":"ACTIVE","product_id":"com.adguard.lifetimePurchase"}]}

$done({body : JSON.stringify(yahee)});
