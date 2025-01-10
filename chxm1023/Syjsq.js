/*************************************

项目名称：Symbolab (需要登录)
下载地址：https://t.cn/A6cE1x9u


**************************************

[rewrite_local]

^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Syjsq.js

[mitm]

hostname = scibug.com

*************************************/

let chxm1023 = JSON.parse($response.body);

chxm1023= {"valid":true,"hasUserConsumedAppleFreeTrial":false,"isCurrentlyInFreeTrial":false,"newlyAssociated":false,"membership":{"isCurrentlyInFreeTrial":false,"valid":true,"hasUserConsumedAppleFreeTrial":false,"newlyAssociated":false}}

$done({body: JSON.stringify(chxm1023)});
