/****************************************

项目功能：酷安去好物推荐

*****************************************

^https:\/\/api\.coolapk\.com\/v6\/feed\/detail.* url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Advertising/KA.js

hostname=api.coolapk.com

****************************************/


let obj = JSON.parse($response.body);

delete obj.data.include_goods
$done({body: JSON.stringify(obj)});
